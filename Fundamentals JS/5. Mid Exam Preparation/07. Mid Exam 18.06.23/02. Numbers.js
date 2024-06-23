function nums(commands) {
    let numbers = commands.shift().split(" ").map(Number);

    let command = commands.shift();

    while(command !== "Finish") {

        command = command.split(" ");
        let index = numbers.indexOf(Number(command[1]));

        switch (command[0]) {
            case "Add":  
                numbers.push(Number(command[1]));
                break;
            case "Remove":
                if (index > -1) {
                    numbers.splice(index, 1);  
                }
                break;
            case "Replace": 
            if (index > -1) {
                numbers[index] = Number(command[2]);
            }
                break;
            case "Collapse":
                let value = Number(command[1]);
                let arr = [];
                numbers = numbers.map(x => {
                    if (x > value) {
                        arr.push(x);
                    }
                });
                numbers = arr;  
                break;
        }
        command = commands.shift();
    }

    console.log(numbers);
}

nums(["1 4 5 19",
        "Add 1",
        "Remove 4",
        "Finish"]);

nums(["1 20 -1 10",
        "Collapse 8",
        "Finish"]);

nums(["5 9 70 -56 9 9",
        "Replace 9 10",
        "Remove 9",
        "Finish"]);