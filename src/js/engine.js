import { DESTINATIONS } from './data.js';

/**
 * App State Management
 */
export const state = {
    destination: '',
    days: 0,
    budget: 150000,
    styles: ['Adventure'],
    veg: false,
    mobility: false,
    itinerary: [],
    costs: { Flights: 0, Hotels: 0, Food: 0, Activities: 0, Misc: 0 }
};

/**
 * Weighted randomization for activity selection
 * @param {Array} list - List of possible activities
 * @param {string} time - Morning, Afternoon, or Evening
 * @returns {Object} Selected activity
 */
export function getWeightedActivity(list, time) {
    const possible = list.filter(a => a.time === time);
    const styled = possible.filter(a => state.styles.includes(a.cat));
    const source = styled.length > 0 && Math.random() > 0.3 ? styled : possible;
    return source[Math.floor(Math.random() * source.length)];
}

/**
 * Calculates total trip costs based on user inputs
 * @param {Object} destData - Destination specific data
 */
export function calculateCosts(destData) {
    const groupMap = { solo: 1, couple: 2, family: 4, group: 6 };
    const multiplier = groupMap[document.getElementById('groupSize').value] || 1;
    
    const flight = destData.baseCosts.flight * multiplier;
    const hotel = destData.baseCosts.hotel * state.days * Math.ceil(multiplier/2);
    const food = destData.baseCosts.food * state.days * multiplier;
    const misc = destData.baseCosts.misc * state.days * multiplier;
    
    let actCost = 0;
    state.itinerary.forEach(d => {
        actCost += (d.morning.cost + d.afternoon.cost + d.evening.cost) * multiplier;
    });

    state.costs = { Flights: flight, Hotels: hotel, Food: food, Activities: actCost, Misc: misc };
    return state.costs;
}

/**
 * Core Trip Generation Logic
 */
export function generateItinerary() {
    const data = DESTINATIONS[state.destination];
    const itinerary = [];
    
    for (let i = 1; i <= state.days; i++) {
        itinerary.push({
            num: i,
            morning: getWeightedActivity(data.activities, 'Morning'),
            afternoon: getWeightedActivity(data.activities, 'Afternoon'),
            evening: getWeightedActivity(data.activities, 'Evening')
        });
    }
    state.itinerary = itinerary;
    return itinerary;
}
