function giftsFromSanta(input) {
    let n = Number(input[0]);
    let m = Number(input[1]);
    let s = Number(input[2]);

    let printLine = "";

    for (let currNum = m; currNum >= n; currNum--) {
        if (currNum === s && (currNum % 2 === 0 && currNum % 3 === 0)) {
            break;
        } else if (currNum % 2 === 0 && currNum % 3 === 0) {
            printLine += (currNum + " ");
        }
    }

    console.log(printLine.trim());
}

giftsFromSanta(["1",
"30",
"15"]);

giftsFromSanta(["1",
"36",
"12"]);

giftsFromSanta(["20",
"1000",
"36"]);