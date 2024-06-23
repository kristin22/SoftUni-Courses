function manipulations(arr) {
    let numbers = arr[0].split(" ");
    numbers = numbers.map(x => Number(x));
    
    for(let i = 1; i < arr.length; i++) {
        let command = arr[i].split(" ");
        
        if(command[0] === "Add") {
            numbers.push(Number(command[1]));
        } else if(command[0] === "Remove") {
            numbers = numbers.filter(x => {return x !== Number(command[1])});
            console.log( numbers);
        } else if(command[0] === "RemoveAt") {
            numbers.splice(Number(command[1]), 1);
        } else if(command[0] === "Insert") {
            numbers.splice(Number(command[2]), 0, Number(command[1]));
        }
    }
}

manipulations(['4 19 2 53 6 43',
                'Add 3',
                'Remove 2',
                'RemoveAt 1',
                'Insert 8 3']);

manipulations(['6 12 2 65 6 42',
                'Add 8',
                'Remove 12',
                'RemoveAt 3',
                'Insert 6 2']);

/*

const arr = [1, 3, 5, 3, 7];
const value = 3;
 
const result = arr.filter(function(x) {
    return x !== value;
});
 
console.log(result);
 
*/

//  Output: [ 1, 5, 7 ]


