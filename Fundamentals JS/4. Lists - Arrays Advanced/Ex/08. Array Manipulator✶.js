function manipulator(numbers, commands) {

    for(let command of commands) {
        command = command.split(" ");
        if (command[0] === "add") {
            numbers.splice(command[1], 0, Number(command[2]));
        } else if (command[0] === "addMany") {
            let addIt = command.slice(2, command.length).map(x => Number(x));
            numbers = numbers.concat(addIt);
        } else if (command[0] === "contains") {
            const contains = (element) => element === Number(command[1]);
            let index = numbers.findIndex(contains);
            console.log(index);
        } else if (command[0] === "remove") {
            numbers.splice(Number(command[1]), 1);
        } else if (command[0] === "shift") {
            let copyIt = numbers.splice(0, Number(command[1]));
            for(let element of copyIt) {
                numbers.push(element);
            }
        } else if (command[0] === "sumPairs") {

        } else if (command[0] === "print") {
            console.log(`[ ${numbers.join(", ")} ]`);
        }
    }

  
}

manipulator([1, 2, 4, 5, 6, 7],
            ['add 1 8', 'contains 1', 'contains 3', 'print']);

manipulator([1, 2, 3, 4, 5],
            ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);