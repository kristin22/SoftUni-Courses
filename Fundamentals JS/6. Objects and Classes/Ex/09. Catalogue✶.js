function foo(products) {
    let catalogue = [];

    for(let product of products) {
        let [name, price] = product.split(" : ");

        let currentProduct = { name, price };
        catalogue.push(currentProduct);
    }
    

    // catalogue = catalogue.sort((a,b) => (a.name > b.name) ? 1 : -1);
    catalogue = catalogue.sort( (a, b) => a.name.localeCompare(b.name));

    let index = 0;
    let prevLetter = "A";

    for (let product of catalogue) {
        let letter = product.name[0];
        if (index === 0) { 
            console.log(letter); 
            prevLetter = letter;
        } if (prevLetter !== letter) {
            prevLetter = letter;
            console.log(letter);
        }

        console.log(`${product.name}: ${product.price}`)

        index++;
    }
}

foo([ 'Appricot : 20.4',
      'Fridge : 1500',
      'TV : 1499',
      'Deodorant : 10',
      'Boiler : 300',
      'Apple : 1.25',
      'Anti-Bug Spray : 15',
      'T-Shirt : 10' ]);

foo([ 'Omlet : 5.4',
      'Shirt : 15',
      'Cake : 59' ]);