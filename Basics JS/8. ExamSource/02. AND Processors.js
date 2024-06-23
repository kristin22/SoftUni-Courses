function andProcessors(input) {
    let plannedProcessors = Number(input[0]);
    let workersCount = Number(input[1]);
    let workDaysCount = Number(input[2]);

    let workHCount = workersCount * workDaysCount * 8;
    let madeProcessors = Math.floor(workHCount / 3);

    if (madeProcessors >= plannedProcessors) {
        let profit = (madeProcessors - plannedProcessors) * 110.10;
        console.log(`Profit: -> ${profit.toFixed(2)} BGN`);
    } else if (madeProcessors < plannedProcessors) {
        let losses = (plannedProcessors - madeProcessors) * 110.10;
        console.log(`Losses: -> ${losses.toFixed(2)} BGN`);
    }
}

andProcessors(["500",
"8",
"20"]);

andProcessors(["150",
"7",
"18"]);
