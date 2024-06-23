function p1rates(input) {   // 92/100
    let index = input.indexOf("Sail");
    let cities = {};

    for(let i = 0; i < index; i++) {
        let [city, population, gold] = input.shift().split("||");
        cities[city] = {
            population: Number(population),
            gold: Number(gold)
        }
    }
    input.shift(); input.pop();

    input.forEach(line => {
        line = line.split("=>");
        let cmnd = line.shift();
        if (cmnd === "Plunder") {
            let [town, people, gold] = line;
            cities[town].population -= Number(people);
            cities[town].gold -= Number(gold);
            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            if (cities[town].population <= 0 || cities[town].gold <= 0) {
                delete cities[town];
                console.log(`${town} has been wiped off the map!`);
            } 
        } else if (cmnd === "Prosper") {
            let [town, gold] = line;
            if (gold < 0) {
                console.log("Gold added cannot be a negative number!");
            } else {
                cities[town].gold += Number(gold);
                console.log(`${gold} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`);
            }
        }   
    });

    // Output:
    if (Object.keys(cities).length === 0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    } else {
        console.log(`Ahoy, Captain! There are ${Object.keys(cities).length} wealthy settlements to go to:`);

        for(let [key, value] of Object.entries(cities)) {
            console.log(`${key} -> Population: ${value.population} citizens, Gold: ${value.gold} kg`);
        }
    } 

}

p1rates(["Tortuga||345000||1250",
        "Santo Domingo||240000||630",
        "Havana||410000||1100",
        "Sail",
        "Plunder=>Tortuga=>75000=>380",
        "Prosper=>Santo Domingo=>180",
        "End"]);

// p1rates(["Nassau||95000||1000",
//         "San Juan||930000||1250",
//         "Campeche||270000||690",
//         "Port Royal||320000||1000",
//         "Port Royal||100000||2000",
//         "Sail",
//         "Prosper=>Port Royal=>-200",
//         "Plunder=>Nassau=>94000=>750",
//         "Plunder=>Nassau=>1000=>150",
//         "Plunder=>Campeche=>150000=>690",
//         "End"]);
