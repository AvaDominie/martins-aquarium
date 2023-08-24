/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            image: "https://www.aquariumfishsale.com/cdn/shop/products/Peacock_Bass_1024x1024_95d44655-9774-42d5-b766-70a368476fbd.jpg?v=1505679709&width=360" ,
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
    
}


export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}




    