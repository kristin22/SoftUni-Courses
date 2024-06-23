function travelTime(input) {
    let destinations = {

    };

    let curr = input.shift().split(" > ");
    let country = curr.shift();
    let town = curr.shift();
    let price = Number(curr.shift());
    
    destinations[country] = {};
    destinations[country][town] = price;


    while (input.length !== 0) {
        curr = input.shift().split(" > ");

        country = curr.shift();
        town = curr.shift();
        price = Number(curr.shift());
        
        // console.log(Object.keys(destinations));

        if (!Object.keys(destinations).includes(country)) { // country doesn't exist
            destinations[country] = {};
            destinations[country][town] = price;
        } else {    // country exists
            if (!Object.keys(destinations[country]).includes(town)) {   // town doesn't exist
                destinations[country][town] = price;
            } else if (price < destinations[country][town]) { // town exist, checking the price
                destinations[country][town] = price;
            }
        }

    }

    // Object.entries(destinations);   [country, {town1: price, ... , townN: price, }]

    let output = [];

    let d = Object.entries(destinations);   // [country, {town1: price, ... , townN: price, }]

    d.forEach((x => { 
        let line = "" + x[0] + " -> ";
        
        curr = Object.entries(x[1]);   // [ ['Sofia', 200], ['Sopot', 800] ]
        for (let el of curr) {
            line += el[0] + " -> " + el[1] + " ";
        }

        output.push(line);

     } ))

     output.sort();
     output.forEach(x => { console.log(x); } );

}

// travelTime([
//     "Bulgaria > Sofia > 500",
//     "Bulgaria > Sopot > 800",
//     "France > Paris > 2000",
//     "Albania > Tirana > 1000",
//     "Bulgaria > Sofia > 200"
// ]);

travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]);