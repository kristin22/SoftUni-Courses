function lowestPricesInCities(arr) {
   let obj = arr.map(line => { return line.split(" | ") })
                .reduce((acc, line) => {
                    let [town, product, price] = line;
                    price = +price;

                    if (acc.hasOwnProperty(product) && acc[product].price > price) { 
                        acc[product].price = price;
                        acc[product].town = town;
                    } else if (!acc.hasOwnProperty(product)) {
                        acc[product] = {price, town};
                    }

                    return acc;
                }, {});
    
    let output = "";
    for(let [key, value] of Object.entries(obj)) {
        output += `${key} -> ${value.price} (${value.town})\n`
    }


    return output;
}

// console.log(lowestPricesInCities(['Sample Town | Sample Product | 1000',
//                                   'Sample Town | Orange | 2',
//                                   'Sample Town | Peach | 1',
//                                   'Sofia | Orange | 3',
//                                   'Sofia | Peach | 2',
//                                   'New York | Sample Product | 1000.1',
//                                   'New York | Burger | 10']));

console.log(lowestPricesInCities(["Sofia City | Audi | 100000",
                                 "Sofia City | BMW | 100000",
                                 "Sofia City | Mitsubishi | 10000",
                                 "Sofia City | Mercedes | 10000",
                                 "Sofia City | NoOffenseToCarLovers | 0",
                                 "Mexico City | Audi | 1000",
                                 "Mexico City | BMW | 99999",
                                 "Mexico City | Mitsubishi | 10000",
                                 "New York City | Mitsubishi | 1000",
                                 "Washington City | Mercedes | 1000"]));