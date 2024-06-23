function store(stock, ordered) {    // The lengths in stock and ordered are the same and you can use one loop instead of two
    
    class Product {
        constructor (name, quantity) {
            this.name = name;
            this.quantity = quantity;
            this.output = function() {
                return console.log(`${this.name} -> ${this.quantity}`);
            }
        }
    }

    let obj = {}; // stockObj, arrObj
    let provisions = [];

    for (let i = 0; i < stock.length; i+=2) {
        let name = stock[i];
        let quantity = Number(stock[i+1]);
        obj = new Product(name, quantity);
        provisions.push(obj);
    }

    for(let i = 0; i < ordered.length; i+= 2) {
        let name = ordered[i];
        let quantity = Number(ordered[i+1]);
        let flag = false;   // the element is not on the list;

        for(currObj of provisions) {
            if (currObj.name === name) {
                currObj.quantity += quantity; 
                flag = true;
            } 
        }
        if (flag === false) {
            obj = new Product(name, quantity);
            provisions.push(obj);
        }
    }

    for(let currObj of provisions) {
        currObj.output();
    }
}

store( [ 'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2' ],
       [ 'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);

store( [ 'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5' ],
       [ 'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);