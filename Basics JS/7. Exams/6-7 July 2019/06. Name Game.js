function nameGame(input) {
    let index = 0;
    let text = input[index];
    let maxSum = 0;
    let winner = "";

    index++;
    while(text !== "Stop") {
        let n = text.length;
        let curSum = 0;
        
        for(let i = 0; i < n; i++) {
            let letterNum = text.charCodeAt(i);
            let curNum = Number(input[index]);
            if(curNum === letterNum) {
                curSum += 10;
            } else {
                curSum += 2;
            }
            index++;
        }

        if(curSum >= maxSum) {
            maxSum = curSum;
            winner = text;
        }

        text = input[index];
        index++;
    }

    if(text === "Stop") {
        console.log(`The winner is ${winner} with ${maxSum} points!`);
    }
}

nameGame(["Ivan",
        "73",
        "20",
        "98",
        "110",
        "Ivo",
        "80",
        "65",
        "87",
        "Stop"]);

nameGame(["Pesho",
        "124",
        "34",
        "111",
        "97",
        "99",
        "Gosho",
        "98",
        "124",
        "88",
        "76",
        "18",
        "Stop"]);