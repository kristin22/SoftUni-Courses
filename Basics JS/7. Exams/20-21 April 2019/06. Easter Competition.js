function competition(input) { 70/100
    let n = Number(input[0]);

    let index = 0;
    let baker = "";
    let currPoints = 0;

    let winPoints = 0;
    let winName = "";

    for(let i = 1; i <= n; i++) {
        baker = input[++index];
        let currSum = 0;

        while(true) {
            currPoints = input[++index];
            if(currPoints === "Stop") {
                console.log(`${baker} has ${currSum} points.`);
                break;
            }
            currSum += Number(currPoints);
            if(currSum > winPoints) {
                winPoints = currSum;
                winName = baker;
            }
        }

        if(currSum === winPoints) {
            console.log(`${winName} is the new number 1!`);
        }
    }

    console.log(`${winName} won competition with ${winPoints} points!`);
}

competition(["3",
        "Chef Manchev", 
        "10",
        "10",
        "10",
        "10",
        "Stop",
        "Natalie",
        "8",
        "2",
        "9",
        "Stop",
        "George",
        "9",
        "2",
        "4",
        "2",
        "Stop"]);