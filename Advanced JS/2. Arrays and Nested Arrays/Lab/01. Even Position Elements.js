function evenPositions(arr) {
    let evens = [];
    for(let i=0; i < arr.length; i+=2) {
        evens.push(arr[i]);
    }
    return evens.join(" ");
}

console.log(evenPositions(['20', '30', '40', '50', '60']));
console.log(evenPositions(['5', '10']));