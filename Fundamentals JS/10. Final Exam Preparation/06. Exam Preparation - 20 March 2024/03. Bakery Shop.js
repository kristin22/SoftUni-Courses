function bakeryShop(input) {
    let foods = {};
    let soldFood = 0;

    input.pop();

    input.forEach(line => {
        let [cmnd, quantity, food] = line.split(" ");
        quantity = Number(quantity);

        if (cmnd === "Receive" && quantity > 0) {
            if (foods.hasOwnProperty(food)) {
                foods[food] += quantity;
            } else {
                foods[food] = quantity;
            }
            
        } else if (cmnd === "Sell") {
            if (foods.hasOwnProperty(food)) {
                if (foods[food] < quantity) { 

                    console.log(`There aren't enough ${food}. You sold the last ${foods[food]} of them.`)
                    
                    soldFood += foods[food];
                    delete foods[food];
                } else {
                    foods[food] -= quantity;
                    soldFood += quantity;
                    
                    console.log(`You sold ${quantity} ${food}.`);

                    if (foods[food] === 0) {
                        delete foods[food];
                    }
                }
            } else {
                console.log(`You do not have any ${food}.`);
            }
        }

    });

    // Output:
    for(let [key, value] of Object.entries(foods)) {
        console.log(`${key}: ${value}`);
    }
    console.log(`All sold: ${soldFood} goods`);

}

bakeryShop([ "Receive 105 cookies",
            "Receive 10 donuts",
            "Sell 10 donuts",
            "Sell 1 bread",
            "Complete" ]);

bakeryShop([ "Receive 10 muffins",
            "Receive 23 bagels",
            "Sell 5 muffins",
            "Sell 10 bagels",
            "Complete" ]);