import { DESTINATIONS, SIMULATION_MESSAGES } from './data.js';
import { state, generateItinerary, calculateCosts } from './engine.js';

/**
 * Initialization and Event Listeners
 */
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    setupInputs();
    runSimulation();
    handleDeepLink();
}

function setupInputs() {
    const budgetSlider = document.getElementById('budgetRange');
    const budgetVal = document.getElementById('budgetValue');

    // Default Dates
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);
    const nextWeekStr = nextWeek.toISOString().split('T')[0];

    const startInput = document.getElementById('dateStart');
    const endInput = document.getElementById('dateEnd');

    startInput.min = todayStr;
    startInput.value = todayStr;
    endInput.min = todayStr;
    endInput.value = nextWeekStr;

    // Budget Slider
    budgetSlider.addEventListener('input', (e) => {
        state.budget = parseInt(e.target.value);
        budgetVal.textContent = state.budget.toLocaleString('en-IN');
    });

    // Style Chips
    document.querySelectorAll('.chip').forEach(chip => {
        chip.onclick = () => {
            chip.classList.toggle('active');
            state.styles = Array.from(document.querySelectorAll('.chip.active')).map(c => c.dataset.val);
        };
    });
}

/**
 * Main Generation Entry Point
 */
window.generateTrip = function() {
    try {
        const dest = document.getElementById('destSearch').value;
        const start = document.getElementById('dateStart').value;
        const end = document.getElementById('dateEnd').value;
        
        if (!dest || !DESTINATIONS[dest]) {
            alert("Please select a valid destination from the dropdown.");
            return;
        }
        if (!start || !end) {
            alert("Specify travel dates.");
            return;
        }

        const diff = Math.ceil((new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24)) + 1;
        if (diff <= 0) { alert("Invalid date range."); return; }

        state.destination = dest;
        state.days = diff;
        state.veg = document.getElementById('vegToggle').checked;
        state.mobility = document.getElementById('mobilityToggle').checked;

        generateItinerary();
        updateUI(DESTINATIONS[dest]);
        
        // Efficiency: Cache the last trip
        localStorage.setItem('lastTrip', JSON.stringify({ state, timestamp: Date.now() }));
    } catch (err) {
        console.error(err);
        alert("Error generating trip: " + err.message);
    }
}

function updateUI(data) {
    renderItinerary();
    calculateAndRenderCosts(data);
    renderGems(data.hiddenGems);
    
    document.getElementById('welcomeState').classList.add('hidden');
    document.getElementById('itineraryHeader').classList.remove('hidden');
    document.getElementById('itineraryTitle').textContent = `Escape to ${state.destination}`;
    
    document.querySelector('.main-content').scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * UI Rendering Functions
 */
function renderItinerary() {
    const container = document.getElementById('itineraryContent');
    const fragment = document.createDocumentFragment(); // Efficiency: DocumentFragment
    
    state.itinerary.forEach((day, idx) => {
        const card = document.createElement('div');
        card.className = 'glass-panel day-card';
        card.style.animationDelay = `${idx * 0.1}s`;
        
        card.innerHTML = `
            <h4 style="margin-bottom:1rem; border-bottom: 1px solid var(--glass-border); padding-bottom:0.5rem">Day ${day.num}</h4>
            ${renderActivity(day.morning)}
            ${renderActivity(day.afternoon)}
            ${renderActivity(day.evening)}
        `;
        fragment.appendChild(card);
    });
    
    container.innerHTML = '';
    container.appendChild(fragment);
}

function renderActivity(act) {
    return `
        <div class="activity-item" aria-label="${act.name}">
            <div class="activity-time">${act.time}</div>
            <div class="activity-name">${act.name}</div>
            <div style="font-size:0.75rem; color: var(--text-dim); margin-bottom: 0.3rem">${act.desc}</div>
            <div class="activity-cost">Est. ₹${act.cost.toLocaleString()}</div>
        </div>
    `;
}

function calculateAndRenderCosts(destData) {
    const costs = calculateCosts(destData);
    const table = document.getElementById('costTable');
    table.innerHTML = '';
    let total = 0;
    Object.entries(costs).forEach(([key, val]) => {
        total += val;
        table.innerHTML += `<tr><td>${key}</td><td style="text-align:right">₹${val.toLocaleString()}</td></tr>`;
    });

    const status = document.getElementById('budgetStatus');
    const diff = state.budget - total;
    if (diff >= 0) {
        status.innerHTML = `<span class="status-green">₹${diff.toLocaleString()} Under Budget</span>`;
    } else {
        status.innerHTML = `<span class="status-red">₹${Math.abs(diff).toLocaleString()} Over Budget</span>`;
    }

    drawDonut(total);
}

function drawDonut(total) {
    const canvas = document.getElementById('costChart');
    const ctx = canvas.getContext('2d');
    const colors = ['#0066FF', '#FFB300', '#00E676', '#E91E63', '#9C27B0'];
    let start = 0;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    Object.values(state.costs).forEach((val, i) => {
        const slice = (val / total) * 2 * Math.PI;
        ctx.beginPath();
        ctx.arc(150, 150, 80, start, start + slice);
        ctx.lineWidth = 25;
        ctx.strokeStyle = colors[i];
        ctx.stroke();
        start += slice;
    });

    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.font = 'bold 20px Inter';
    ctx.fillText('₹' + Math.round(total/1000) + 'K', 150, 158);
}

function renderGems(gems) {
    const container = document.getElementById('gemsContainer');
    const filter = document.getElementById('gemFilter').value;
    container.innerHTML = '';

    gems.filter(g => filter === 'all' || g.cat === filter).forEach(gem => {
        const card = document.createElement('div');
        card.className = 'rec-card';
        card.innerHTML = `
            <div class="rec-img-placeholder" style="background: ${gem.img}"></div>
            <div class="rec-tag">${gem.cat}</div>
            <div style="font-weight:700">${gem.name}</div>
            <div style="font-size:0.7rem; color: rgba(255,255,255,0.7)">Tip: ${gem.tip}</div>
        `;
        container.appendChild(card);
    });
}

function runSimulation() {
    const ticker = document.getElementById('simulationTicker');
    let idx = 0;
    function next() {
        const m = SIMULATION_MESSAGES[idx];
        ticker.innerHTML = `
            <div class="ticker-item active">
                <div class="status-dot status-${m.c}"></div>
                <div style="font-size: 0.85rem">${m.t}</div>
            </div>
        `;
        idx = (idx + 1) % SIMULATION_MESSAGES.length;
    }
    next();
    setInterval(next, 8000);
}

/**
 * Deep Linking and Utilities
 */
window.copyTripLink = function() {
    const params = {
        d: state.destination,
        s: document.getElementById('dateStart').value,
        e: document.getElementById('dateEnd').value,
        b: state.budget,
        g: document.getElementById('groupSize').value
    };
    const hash = btoa(JSON.stringify(params));
    window.location.hash = hash;
    navigator.clipboard.writeText(window.location.href);
    
    const btn = document.getElementById('copyBtn');
    const old = btn.innerHTML;
    btn.textContent = "URL Copied!";
    setTimeout(() => btn.innerHTML = old, 3000);
}

function handleDeepLink() {
    if (window.location.hash) {
        try {
            const data = JSON.parse(atob(window.location.hash.substring(1)));
            document.getElementById('destSearch').value = data.d;
            document.getElementById('dateStart').value = data.s;
            document.getElementById('dateEnd').value = data.e;
            document.getElementById('budgetRange').value = data.b;
            document.getElementById('groupSize').value = data.g;
            state.budget = data.b;
            document.getElementById('budgetValue').textContent = data.b.toLocaleString('en-IN');
            if (data.d && data.s) window.generateTrip();
        } catch(e) {}
    }
}

document.getElementById('gemFilter').onchange = () => {
    if (state.destination) renderGems(DESTINATIONS[state.destination].hiddenGems);
};
