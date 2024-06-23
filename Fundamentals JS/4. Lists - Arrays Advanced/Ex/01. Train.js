function train(commands) {
    let wagons = commands[0].split(" ");
    wagons = wagons.map(x => Number(x));

    let maxCapacity = Number(commands[1]);
    
    commands = commands.splice(2, commands.length-1);

    for(let element of commands) { 
        let currCommand = element.split(" ");
        if (currCommand[0] === "Add") {
            wagons.push(Number(currCommand[1]));
        } else {
            currCommand = Number(currCommand);

            let index = 0;
            for(people of wagons) {
                if(people + currCommand <= maxCapacity) {
                    wagons[index] = people + currCommand;
                    break;
                }
                index++
            }
        }
    }

    console.log(wagons.join(" "));
}

train(['32 54 21 12 4 0 23',
        '75',
        'Add 10',
        'Add 0',
        '30',
        '10',
        '75']);

train(['0 0 0 10 2 4',
        '10',
        'Add 10',
        '10',
        '10',
        '10',
        '8',
        '6']);