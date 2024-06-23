function moving(input) {
    let w = Number(input[0]);
    let l = Number(input[1]);
    let h = Number(input[2]);
    let freeSpace = w * h * l;

    let index = 3;
    let command = input[index];
    while (command !== "Done") {
        let number = Number(command);
        freeSpace -= number;
        if (freeSpace <= 0) {
            break;
        }

        index++;
        command = input[index];
    }

    if (command === "Done") {
        console.log(`${freeSpace} Cubic meters left.`);
    } else if (freeSpace <= 0) {
        console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
    }
     
}

moving(["10", 
        "10",
        "2",
        "20",
        "20",
        "20",
        "20",
        "122"]);

moving(["10", 
        "1",
        "2",
        "4", 
        "6",
        "Done"]);