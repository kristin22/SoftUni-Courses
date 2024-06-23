function storage(entries) {
    const stock = new Map();

    for (const entry of entries) {
        const currEntry = entry.split(" ");
        const product = currEntry[0];
        const cnt = Number(currEntry[1]);

        if (stock.has(product) === true) {  // the same as: !stock.has(product) 
            stock.set(product, stock.get(product) + cnt);
        } else {
            stock.set(product, cnt);
        }
    }

    // Each key-value pair in the map is and an array!!!
    for (const product of stock) {
        console.log(`${product[0]} -> ${product[1]}`);
    }

    /* Each key-value pair in the map is and an array!!!
    another way of doing the loop:
     
    for (const [product, quantity] of storage) {
        console.log(`${product} -> ${quantity}`);
    }
    */

}

storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);

storage(["apple 50", "apple 61", "coffee 115", "coffee 40"]);