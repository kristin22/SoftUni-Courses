function storeCatalogue(arr) {
    arr = arr.map(line => line.split(" : "));
    arr = arr.sort((a, b) => a[0].localeCompare(b[0]));
    
    
    let letter = arr[0][0][0];
    let output = `${letter}\n`;
    let prevLetter = letter;

    for(let el of arr) {
        let letter = el[0][0];
        if (prevLetter !== letter) {
            output += `${letter}\n`
            prevLetter = letter;
        }
        output += `  ${el[0]}: ${el[1]}\n`
    }  
    
    return output;
}

console.log(storeCatalogue(['Appricot : 20.4',
                            'Fridge : 1500',
                            'TV : 1499',
                            'Deodorant : 10',
                            'Boiler : 300',
                            'Apple : 1.25',
                            'Anti-Bug Spray : 15',
                            'T-Shirt : 10']));

console.log(storeCatalogue(['Banana : 2',
                            "Rubic's Cube : 5",
                            'Raspberry P : 4999',
                            'Rolex : 100000',
                            'Rollon : 10',
                            'Rali Car : 2000000',
                            'Pesho : 0.000001',
                            'Barrel : 10']));