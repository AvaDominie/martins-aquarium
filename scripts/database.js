/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            image: "https://www.aquariumfishsale.com/cdn/shop/products/Peacock_Bass_1024x1024_95d44655-9774-42d5-b766-70a368476fbd.jpg?v=1505679709&width=360",
            species: "striped bass",
            length: 3,
            name: "Bart",
            harvestedLocation: "St. Lawrence River",
            food: "crustaceans",
        },
        {
            image: "https://www.aquariumfishsale.com/cdn/shop/products/Blood-Red-Parrot-Cichlid.jpg?v=1511468665&width=360",
            species: "salmon",
            length: 2,
            name: "Sammy",
            harvestedLocation: "Pacific Ocean",
            food: "small fish",
        },
        {
            image: "https://www.aquariumfishsale.com/cdn/shop/products/Cardinal-Tetra_473x473_f352eb72-1b46-4235-aac7-3b8faa656a06.jpg?v=1677084337&width=360",
            species: "trout",
            length: 9,
            name: "Tina",
            harvestedLocation: "Rocky Mountain Stream",
            food: "insects",
        },
        {
            image: "https://www.aquariumfishsale.com/cdn/shop/products/Taiwan_reef.jpg?v=1504851405&width=360",
            species: "bluegill",
            length: 10,
            name: "Billy",
            harvestedLocation: "St. Lawrence River",
            food: "aquatic plants",
        },
        {

            image: "https://www.aquariumfishsale.com/cdn/shop/products/Foot-Cleaner-Goby.jpg?v=1549174788&width=360",
            species: "catfish",
            length: 4,
            name: "Carl",
            harvestedLocation: "Mississippi River",
            food: "bottom-dwelling organisms",
        },
        {
            image: "https://www.aquariumfishsale.com/cdn/shop/products/Yellow-Foxface-Rabbitfish.jpg?v=1535148210&width=360",
            species: "yellowfin tuna",
            length: 5,
            name: "Terry",
            harvestedLocation: "Tropical Waters",
            food: "squid and smaller fish",
        },
        {
            image: "https://www.aquariumfishsale.com/cdn/shop/products/Red-Wag-Swordtail_80320a79-05b9-4cf1-992e-f6e99e1d5268.jpg?v=1525485801&width=360",
            species: "mahi-mahi",
            length: 9,
            name: "Molly",
            harvestedLocation: "Caribbean Sea",
            food: "crustaceans and flying fish",
        },
        {
            image: "https://www.aquariumfishsale.com/cdn/shop/products/Pike-Cichlid.jpg?v=1525463375&width=360",
            species: "pike",
            length: 15,
            name: "Percy",
            harvestedLocation: "Mississippi River",
            food: "smaller fish and frogs",
        },
        {
            image: "https://www.aquariumfishsale.com/cdn/shop/products/Harlequin-Tuskfish-Wrasse.jpg?v=1640838065&width=360",
            species: "red snapper",
            length: 12,
            name: "Ruby",
            harvestedLocation: "Tropical Waters",
            food: "shrimp and crab",
        },
        {
            image: "https://www.aquariumfishsale.com/cdn/shop/products/Flagtail-Goby.jpg?v=1609442134&width=360",
            species: "swordfish",
            length: 6,
            name: "Sandy",
            harvestedLocation: "Caribbean Sea",
            food: "squid and mackerel",
        }
    ],
    travelTips: [
        {
            info: "Research the fishing destination you're planning to visit. Learn about the local fish species, regulations, seasons, and popular fishing spots."
        },
        {
            info: "Make sure you understand the fishing regulations and requirements for the area you'll be fishing in. Obtain any necessary fishing licenses or permits before you start fishing."
        },
        {
            info: "Pack the right fishing gear for your target species and the fishing environment. This includes rods, reels, lines, hooks, lures, bait, and any other specific equipment you might need."
        },
        {
            info: "Wear appropriate clothing for the weather and fishing conditions. Sun protection, waterproof clothing, and comfortable footwear are important."
        },
        {
            info: "Prioritize safety by wearing a life jacket if you'll be on a boat, and be cautious when wading in water. Follow any safety guidelines provided by the fishing charter or location."
        }
    ],
    locationList: [
        {
            location: "St. Lawrence River" ,
            waterInfo: "The St. Lawrence River is one of the largest and most important rivers in North America, flowing through the Great Lakes and connecting the Atlantic Ocean to the interior of the continent.",
            fishInfo: "The river is known for its diverse aquatic life, including various fish species like striped bass, which thrive in its waters."
        },
        {
            location: "Pacific Ocean" ,
            waterInfo: "The Pacific Ocean is the largest and deepest ocean on Earth, covering more area than all of the planet's landmasses combined.",
            fishInfo: "Salmon are iconic and economically important species, with several different species found in the Pacific."
        },
        {
            location: "Rocky Mountain Stream" ,
            waterInfo: "Rocky Mountain streams are characterized by their clear, cold waters and often rapid flow due to the mountainous terrain.",
            fishInfo: "These streams are habitats for various trout species, which are well adapted to the fast-moving, oxygen-rich water conditions."
        },
        {
            location: "Mississippi River" ,
            waterInfo: "The Mississippi River is one of the longest rivers in the world, flowing through multiple states in the United States.",
            fishInfo: "It's home to diverse fish populations, including catfish species that thrive in its deep and often murky waters."
        },
        {
            location: "Tropical Waters" ,
            waterInfo: "Tropical waters are found in regions near the equator and are known for their warm temperatures and high biodiversity.",
            fishInfo: "Yellowfin tuna are prized game fish found in tropical and subtropical oceans, known for their strong and fast swimming behavior."
        },
        {
            location: "Caribbean Sea" ,
            waterInfo: "The Caribbean Sea is a vibrant and ecologically diverse region known for its crystal-clear waters and coral reefs.",
            fishInfo: "Mahi-mahi, also known as dorado or dolphinfish, are found in the Caribbean and are known for their brilliant colors and acrobatic behavior when caught."
        }
    ],

    tankTips: [
        {
            tip: "Regular Water Changes",
            info: "Regular water changes are vital for removing accumulated waste, excess nutrients, and maintaining water quality. Partial water changes (typically 10-20% of the tank volume) should be performed on a regular basis, such as weekly or bi-weekly."
        },
        {
            tip: "Filtration System",
            info: "A reliable filtration system (mechanical, biological, and chemical) helps remove debris, toxins, and excess nutrients from the water. Clean or replace filter media as needed to ensure optimal filtration efficiency."
        },
        {
            tip: "Testing Water Parameters",
            info: "Regularly test water parameters such as ammonia, nitrite, nitrate, pH, salinity (for saltwater), and temperature. Test kits are available to help you monitor and maintain appropriate levels."
        },
        {
            tip: "Temperature Control",
            info: "For freshwater aquariums, use a reliable aquarium heater to maintain a stable water temperature within the appropriate range for your fish species. In saltwater aquariums, use a heater and a chiller if necessary to maintain the desired temperature."
        },
        {
            tip: "Salinity Control (Saltwater Aquariums)",
            info: "For saltwater aquariums, maintain proper salinity levels using a refractometer or hydrometer. Regularly check and adjust the salinity to match the requirements of your specific marine organisms."
        },
        {
            tip: "Maintain Aeration and Water Circulation",
            info: "Ensure proper aeration and water circulation within the tank to distribute heat, oxygen, and nutrients evenly."
        },
        {
            tip: "Research and Education",
            info: "Remember that every aquarium is unique, and the care requirements can vary based on the species of fish, plants, and the size of the tank. Regular maintenance and consistent monitoring will help you provide a clean, safe, and comfortable environment for your aquatic pets."
        }
    ]

}


export const getFish = () => {
    return database.fish.map(fish => ({ ...fish }))
}

export const getTravel = () => {
    return database.travelTips.map(travelTips => ({ ...travelTips }))
}

export const getTank = () => {
    return database.tankTips.map(tankTips => ({...tankTips}))
}

export const getLocation = () => {
    return database.locationList.map(locationList => ({...locationList}))
}
