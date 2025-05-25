function solution() {
    const storage = {   protein: 0, carbohydrate: 0, fat: 0, flavour: 0 }

    const recipes = {
        apple:      { carbohydrate: 1,  flavour: 2 },
        lemonade:   { carbohydrate: 10, flavour: 20 },
        burger:     { carbohydrate: 5,  fat: 7,           flavour: 3 },
        eggs:       { protein: 5,       fat: 1,           flavour: 1 },
        turkey:     { protein: 10,      carbohydrate: 10, fat: 10, flavour: 10 }
    }

    function commands () {
        return {
            restock (microelement, quantity) {  
                storage[microelement] += +quantity
                return 'Success'
            },

            prepare (recipe, quantity) { 
                let order = Object.entries(recipes[recipe])
                order.forEach(ingredient => ingredient[1] *= +quantity)

                for (let [microelement, quantity] of order) {
                    if (storage[microelement] < quantity) {
                        return `Error: not enough ${microelement} in stock` 
                    }
                }

                order.forEach(([microelement, quantity]) => {
                    storage[microelement] -= quantity
                })

                return 'Success'
            },

            report () {
                return `protein=${storage['protein']} carbohydrate=${storage['carbohydrate']} fat=${storage['fat']} flavour=${storage['flavour']}`; 
            },
        }
    }

    return function inputData (input) {
        const [command, option, quantity] = input.split(' ') 

        let commandHandler = commands()
        return commandHandler[command](option, quantity)
    }

}

// Execution
let manager = solution (); 
console.log (manager ("restock flavour 50")); // Success 
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log (manager ("restock carbohydrate 10")); // Success 
console.log (manager ("restock flavour 10")); // Success
console.log (manager ("prepare apple 1")); // Success
console.log (manager ("restock fat 10")); // Success
console.log (manager ("prepare burger 1")); // Success
console.log (manager ("report")); // protein=0 carbohydrate=4 fat=3 flavour=55

console.log('----------');

console.log (manager ('prepare turkey 1')); // Error: not enough protein in stock
console.log (manager ('restock protein 10')); // Success
console.log (manager ('prepare turkey 1')); // Error: not enough carbohydrate in stock
console.log (manager ('restock carbohydrate 10')); // Success
console.log (manager ('prepare turkey 1')); // Error: not enough fat in stock
console.log (manager ('restock fat 10')); // Success
console.log (manager ('prepare turkey 1')); // Error: not enough flavour in stock
console.log (manager ('restock flavour 10')); // Success
console.log (manager ('prepare turkey 1')); // Success
console.log (manager ('report')); // protein=0 carbohydrate=0 fat=0 flavour=0

