function movingTarget(commands) {
    let numbers = commands.shift();
    commands.pop();

    numbers = numbers.split(" ").map(Number);

    for(let element of commands) {
        let command = element.split(" ");
        let index = Number(command[1]);
        let pvr = Number(command[2]);

        if (index >= 0 && index < numbers.length) {
            if(command[0] === "Shoot") {
                numbers[index] = numbers[index] - pvr;
                if (numbers[index] <= 0) { // remove the target if it's 0
                    numbers.splice(index, 1);
                }

            } else if (command[0] === "Add") {
                numbers.splice(index, 0, pvr);
            } else if (command[0] === "Strike") {
                let starts = index - pvr, ends = index + pvr;
                if (starts >= 0 && ends < numbers.length) {
                    numbers.splice(starts, ends + 1 - starts);
                } else {
                    console.log("Strike missed!");
                }
            } 
        } else if ((index < 0 || index >= numbers.length) && command === "Add") {
            console.log("Invalid placement!");
        }

    }

    console.log(numbers.join("|"));

}

movingTarget(["52 74 23 44 96 110",
            "Shoot 5 10",
            "Shoot 1 80",
            "Strike 2 1",
            "Add 22 3",
            "End"]);

movingTarget(["1 2 3 4 5",
            "Strike 0 1",
            "End"]);