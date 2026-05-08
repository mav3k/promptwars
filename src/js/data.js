/**
 * Master Dataset for Destinations
 * @type {Object}
 */
export const DESTINATIONS = {
    'Goa': {
        weather: 'Sunny, 31°C',
        baseCosts: { flight: 8500, hotel: 4200, food: 1500, activities: 2800, misc: 800 },
        activities: [
            { name: 'Heritage Walk in Fontainhas', time: 'Morning', desc: 'Old Latin quarter with vibrant Portuguese houses.', cost: 500, cat: 'Culture' },
            { name: 'Scuba Diving at Grande Island', time: 'Morning', desc: 'Discover Goan marine life and shipwrecks.', cost: 4500, cat: 'Adventure' },
            { name: 'Dudhsagar Falls Trek', time: 'Morning', desc: 'Off-road jeep safari to the "Sea of Milk".', cost: 2500, cat: 'Nature' },
            { name: 'Breakfast at German Bakery', time: 'Morning', desc: 'Iconic Anjuna spot for health bowls.', cost: 800, cat: 'Foodie' },
            { name: 'Kayaking in Sal Backwaters', time: 'Afternoon', desc: 'Quiet paddle through mangroves and birds.', cost: 1200, cat: 'Adventure' },
            { name: 'Spice Plantation Lunch', time: 'Afternoon', desc: 'Organic farm tour with traditional thali.', cost: 900, cat: 'Foodie' },
            { name: 'Yoga Session at Mandrem', time: 'Afternoon', desc: 'Rejuvenating flow on a quiet northern beach.', cost: 1500, cat: 'Relaxation' },
            { name: 'Old Goa Church Tour', time: 'Afternoon', desc: 'UNESCO sites: Basilica of Bom Jesus.', cost: 300, cat: 'Culture' },
            { name: 'Sunset Cruise on Mandovi', time: 'Evening', desc: 'Traditional dance and river views.', cost: 1200, cat: 'Relaxation' },
            { name: 'Dinner at Thalassa', time: 'Evening', desc: 'Greek feast with fire shows on a cliff.', cost: 2500, cat: 'Luxury' },
            { name: 'Anjuna Flea Market', time: 'Evening', desc: 'Shop for treasures and local crafts.', cost: 200, cat: 'Culture' },
            { name: 'Night Kayaking (Bioluminescence)', time: 'Evening', desc: 'Glowing waters in the silent river.', cost: 3000, cat: 'Adventure' },
            { name: 'Cooking Class with Local Chef', time: 'Afternoon', desc: 'Master the authentic Goan fish curry.', cost: 2200, cat: 'Foodie' },
            { name: 'Bird Watching at Chorao', time: 'Morning', desc: 'Ferry ride to Dr. Salim Ali Sanctuary.', cost: 600, cat: 'Nature' },
            { name: 'Casino Royale Evening', time: 'Evening', desc: 'Floating luxury gaming on the river.', cost: 4000, cat: 'Luxury' }
        ],
        hotels: [
            { name: 'The Postcard Moira', type: 'Luxury', cost: 22000 },
            { name: 'Alila Diwa', type: 'Luxury', cost: 15000 },
            { name: 'Zostel Goa', type: 'Budget', cost: 1800 }
        ],
        hiddenGems: [
            { name: 'Butterfly Beach', cat: 'Adventure', tip: 'Hire a boat from Palolem.', img: 'linear-gradient(135deg, #4facfe, #00f2fe)' },
            { name: 'Netravali Bubbling Lake', cat: 'Culture', tip: 'Stepwell with mysterious bubbles.', img: 'linear-gradient(135deg, #667eea, #764ba2)' },
            { name: 'Cola Beach Lagoon', cat: 'Relaxation', tip: 'Freshwater meeting the salt sea.', img: 'linear-gradient(135deg, #2af598, #009efd)' },
            { name: 'Galgibaga Turtle Beach', cat: 'Nature', tip: 'One of the quietest beaches in Goa.', img: 'linear-gradient(135deg, #f093fb, #f5576c)' },
            { name: 'Chorao Island', cat: 'Adventure', tip: 'Take the local ferry at sunrise.', img: 'linear-gradient(135deg, #5ee7df, #b490ca)' },
            { name: 'Arvalem Caves', cat: 'Culture', tip: '6th-century rock-cut Buddhist caves.', img: 'linear-gradient(135deg, #f6d365, #fda085)' }
        ]
    },
    'Paris': {
        weather: 'Mild, 19°C',
        baseCosts: { flight: 65000, hotel: 12000, food: 5000, activities: 7000, misc: 3000 },
        activities: [
            { name: 'Louvre VIP Early Entry', time: 'Morning', desc: 'Beat the crowds to see the Mona Lisa.', cost: 4800, cat: 'Culture' },
            { name: 'Eiffel Tower Summit Access', time: 'Evening', desc: 'Panoramic sunset view from the peak.', cost: 3500, cat: 'Luxury' },
            { name: 'Macaron Making Workshop', time: 'Afternoon', desc: 'Learn the secret of French patisserie.', cost: 6500, cat: 'Foodie' },
            { name: 'Montmartre Artists Tour', time: 'Morning', desc: 'Follow the footsteps of Picasso and Dali.', cost: 1200, cat: 'Culture' },
            { name: 'Seine River Picnic', time: 'Evening', desc: 'Local cheese and wine by the water.', cost: 2000, cat: 'Relaxation' },
            { name: 'Versailles Palace Trip', time: 'Morning', desc: 'The opulence of the Sun King.', cost: 3000, cat: 'Culture' },
            { name: 'Catacombs Underground', time: 'Afternoon', desc: 'Explore the ossuary beneath Paris.', cost: 2500, cat: 'Adventure' },
            { name: 'Jazz Night in Saint-Germain', time: 'Evening', desc: 'Live soul in historic cellars.', cost: 4000, cat: 'Culture' }
        ],
        hotels: [{ name: 'Hotel Regina', type: 'Luxury', cost: 45000 }],
        hiddenGems: [
            { name: 'Promenade Plantée', cat: 'Nature', tip: 'An elevated park on a railway.', img: 'linear-gradient(135deg, #11998e, #38ef7d)' },
            { name: 'Shakespeare & Co', cat: 'Culture', tip: 'Iconic English bookstore.', img: 'linear-gradient(135deg, #304352, #d7d2cc)' }
        ]
    },
    'Tokyo': {
        weather: 'Spring, 22°C',
        baseCosts: { flight: 55000, hotel: 9000, food: 4000, activities: 5500, misc: 2500 },
        activities: [
            { name: 'Tsukiji Fish Market Tour', time: 'Morning', desc: 'Worlds freshest sushi breakfast.', cost: 3500, cat: 'Foodie' },
            { name: 'TeamLab Borderless', time: 'Afternoon', desc: 'Immersive digital art experience.', cost: 2800, cat: 'Culture' },
            { name: 'Shibuya Sky Observation', time: 'Evening', desc: '360 degree city view over the crossing.', cost: 1800, cat: 'Luxury' },
            { name: 'Akihabara Tech Trek', time: 'Morning', desc: 'Deep dive into anime and electronics.', cost: 500, cat: 'Adventure' },
            { name: 'Robot Restaurant Show', time: 'Evening', desc: 'Wild neon lasers and music performance.', cost: 8000, cat: 'Luxury' },
            { name: 'Ghibli Museum Visit', time: 'Afternoon', desc: 'Magic of Hayao Miyazaki\'s animation.', cost: 1200, cat: 'Culture' }
        ],
        hotels: [{ name: 'Park Hyatt Tokyo', type: 'Luxury', cost: 65000 }],
        hiddenGems: [
            { name: 'Shimokitazawa', cat: 'Culture', tip: 'Hipster vintage shops and cafes.', img: 'linear-gradient(135deg, #8E2DE2, #4A00E0)' },
            { name: 'Todoroki Valley', cat: 'Nature', tip: 'A secret jungle in the city.', img: 'linear-gradient(135deg, #1D976C, #93F9B9)' }
        ]
    },
    'Rajasthan': {
        weather: 'Sunny, 35°C',
        baseCosts: { flight: 8000, hotel: 5000, food: 1800, activities: 3500, misc: 1000 },
        activities: [
            { name: 'Amer Fort Elephant Ride', time: 'Morning', desc: 'Royal ascent to the fortress.', cost: 2500, cat: 'Luxury' },
            { name: 'Jaisalmer Dune Bashing', time: 'Evening', desc: 'Thar desert Jeep safari at sunset.', cost: 3000, cat: 'Adventure' },
            { name: 'Udaipur Boat Ride', time: 'Evening', desc: 'Serene Lake Pichola sunset cruise.', cost: 1500, cat: 'Relaxation' }
        ],
        hotels: [{ name: 'Taj Lake Palace', type: 'Luxury', cost: 75000 }],
        hiddenGems: [{ name: 'Bhangarh Fort', cat: 'Adventure', tip: 'Known as the most haunted place.', img: 'linear-gradient(135deg, #333, #000)' }]
    },
    'Bali': {
        weather: 'Humid, 29°C',
        baseCosts: { flight: 35000, hotel: 6000, food: 2000, activities: 4000, misc: 1500 },
        activities: [
            { name: 'Uluwatu Kecak Dance', time: 'Evening', desc: 'Clifftop fire dance at sunset.', cost: 1500, cat: 'Culture' },
            { name: 'Tegalalang Rice Terrace', time: 'Morning', desc: 'Iconic lush green paddy views.', cost: 500, cat: 'Nature' },
            { name: 'Nusa Penida Boat Trip', time: 'Morning', desc: 'Island hopping to Kelingking beach.', cost: 3500, cat: 'Adventure' }
        ],
        hotels: [{ name: 'Ayana Resort', type: 'Luxury', cost: 40000 }],
        hiddenGems: [{ name: 'Sidemen Valley', cat: 'Nature', tip: 'Ubud vibes without the crowds.', img: 'linear-gradient(135deg, #00b09b, #96c93d)' }]
    },
    'Dubai': {
        weather: 'Hot, 38°C',
        baseCosts: { flight: 25000, hotel: 12000, food: 6000, activities: 10000, misc: 4000 },
        activities: [
            { name: 'Burj Khalifa Level 148', time: 'Evening', desc: 'Highest observation deck in the world.', cost: 8500, cat: 'Luxury' },
            { name: 'Desert Safari & BBQ', time: 'Evening', desc: 'Dune bashing and belly dancing.', cost: 4000, cat: 'Adventure' },
            { name: 'Dubai Mall Aquarium', time: 'Afternoon', desc: 'Gigantic shark tank and underwater zoo.', cost: 3000, cat: 'Family' }
        ],
        hotels: [{ name: 'Atlantis The Palm', type: 'Luxury', cost: 55000 }],
        hiddenGems: [{ name: 'Al Fahidi District', cat: 'Culture', tip: 'Visit the Coffee Museum.', img: 'linear-gradient(135deg, #e67e22, #d35400)' }]
    },
    'Kerala': {
        weather: 'Lush, 28°C',
        baseCosts: { flight: 9000, hotel: 6000, food: 1200, activities: 3000, misc: 1000 },
        activities: [
            { name: 'Alleppey Houseboat Stay', time: 'Evening', desc: 'Luxury stay on the calm backwaters.', cost: 12000, cat: 'Relaxation' },
            { name: 'Munnar Tea Estate Walk', time: 'Morning', desc: 'Rolling hills of tea plantations.', cost: 500, cat: 'Nature' },
            { name: 'Kathakali Performance', time: 'Evening', desc: 'Traditional masked dance drama.', cost: 800, cat: 'Culture' }
        ],
        hotels: [{ name: 'Kumarakom Lake Resort', type: 'Luxury', cost: 28000 }],
        hiddenGems: [{ name: 'Varkala Cliff', cat: 'Relaxation', tip: 'Best sunset views on the coast.', img: 'linear-gradient(135deg, #12c2e9, #c471ed, #f64f59)' }]
    },
    'Manali': {
        weather: 'Cold, 5°C',
        baseCosts: { flight: 10000, hotel: 4000, food: 1000, activities: 5000, misc: 1000 },
        activities: [
            { name: 'Solang Valley Paragliding', time: 'Morning', desc: 'Fly above snow-covered valleys.', cost: 4000, cat: 'Adventure' },
            { name: 'Rohtang Pass Snow Tour', time: 'Morning', desc: 'Highest point for snow activities.', cost: 3500, cat: 'Nature' },
            { name: 'Old Manali Cafe Crawl', time: 'Evening', desc: 'Live music and international vibes.', cost: 1500, cat: 'Foodie' }
        ],
        hotels: [{ name: 'Span Resort', type: 'Luxury', cost: 15000 }],
        hiddenGems: [{ name: 'Jogini Falls Trek', cat: 'Nature', tip: 'Start early to avoid crowds.', img: 'linear-gradient(135deg, #83a4d4, #b6fbff)' }]
    }
};

/**
 * Common System Messages for the Simulation Feed
 * @type {Array}
 */
export const SIMULATION_MESSAGES = [
    { t: "Flight prices to Goa expected to rise 12% by tonight.", c: "red" },
    { t: "Exclusive deal: 20% off Spa at Alila Diwa available.", c: "green" },
    { t: "Weather forecast: Heavy rain predicted for Day 4.", c: "amber" },
    { t: "Scuba diving slots for Grande Island are filling fast.", c: "red" },
    { t: "Local hidden gem 'Butterfly Beach' accessible today.", c: "green" }
];
