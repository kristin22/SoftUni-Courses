function cake(input) {
    let w = Number(input[0]);
    let h = Number(input[1]);
    let pieces = w * h;

    let index = 2;
    let command = input[index];

    while (command !== "STOP") {
        pieces -= Number(command);

        if (pieces <= 0) {
            break;
        }
        
        index++;
        command = input[index];
    }

    if (command === "STOP") {
        console.log(`${pieces} pieces are left.`);

    } else if (pieces <= 0) {
        console.log(`No more cake left! You need ${Math.abs(pieces)} pieces more.`);
    }
}

cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"]);

cake(["10",
"2",
"2",
"4",
"6",
"STOP"]);