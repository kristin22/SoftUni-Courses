function cookByNums(starter, ...commands) {
    starter = +starter;
    let output = [];
    
    let operations = {
        chop: (num) => num / 2,
        dice: (num) => Math.sqrt(num),
        spice: (num) => num + 1,
        bake: (num) => num * 3,
        fillet: (num) => num *= 0.8,
    }

    commands.forEach(cmnd => {
        if (operations.hasOwnProperty(cmnd)) { 
            starter = operations[cmnd](starter); 
            output.push(starter);
        }
    })

    output = output.join("\n");
    return output;
}

console.log(cookByNums('32', 'chop', 'chop', 'chop', 'chop', 'chop'));
console.log(cookByNums('9', 'dice', 'spice', 'chop', 'bake', 'fillet'));