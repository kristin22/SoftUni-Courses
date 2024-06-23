function suitcaseLoad(input) {   // 50/100
    let capacity = Number(input[0]);
    let suitcaseCount = 0;

    let index = 0;
    let command = "";
    while(true) {
        command = input[++index];
        if(command === "End") {
            console.log("Congratulations! All suitcases are loaded!");
            console.log(`Statistic: ${suitcaseCount
            } suitcases loaded.`);
            return;
        }
        if(Number(command > capacity)) {
            console.log(`"No more space!"`);
            console.log(`Statistic: ${suitcaseCount
            } suitcases loaded.`);
            return;
        }
        capacity -= Number(command);
        suitcaseCount++;
    }

}

suitcaseLoad(["550",
"100",
"252",
"72",
"End"]);

suitcaseLoad(["700.5",
"180",
"340.6",
"126",
"220"]);

suitcaseLoad(["1200.2",
"260",
"380.5",
"125.6",
"305",
"End"]);