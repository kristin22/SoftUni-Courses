class Storage {
    constructor(capacity) {
        this.capacity = capacity;   // available place - we reduce it every time we add a new product with the given quantity
        this.storage = [];          // We create empty arr to store all the products
        this.totalCost = 0;         // We create a place for the total sum
    }

    addProduct(product) {
        this.capacity -= product.quantity;
        this.storage.push(product);         // we push the new product       
        this.totalCost += product.quantity * product.price;
    }

    getProducts() { return this.storage.map( x => JSON.stringify(x)).join("\n") }
}


// Tests:

let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};

let storage = new Storage(50);

storage.addProduct(productOne);     // we invoke the function and we push the new product, reduce capacity and add sum to the total
storage.addProduct(productTwo);
storage.addProduct(productThree);

console.log(storage.getProducts()); //  output all the elements
console.log(storage.capacity);
console.log(storage.totalCost);

/*

let productOne = {name: 'Tomato', price: 0.90, quantity: 19};
let productTwo = {name: 'Potato', price: 1.10, quantity: 10};

let storage = new Storage(30);

storage.addProduct(productOne);
storage.addProduct(productTwo);

console.log(storage.totalCost);

*/