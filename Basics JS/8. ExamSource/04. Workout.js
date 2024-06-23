function workout(input) {
    let daysCount = Number(input[0]);
    let currDay = Number(input[1]);
    let total = currDay;

    let prcnt = 0;
    let index = 1;

    for(let i = 1; i <= daysCount; i++) {
        prcnt = input[++index];
        currDay *= (1 + prcnt / 100);
        total += currDay;
    }

    if(total >= 1000) {
        console.log(`You've done a great job running ${Math.ceil(total - 1000)} more kilometers!`);
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - total)} more kilometers`);
    }
}

workout(["5",
"30",
"10",
"15",
"20",
"5",
"12"]);

workout(["4",
"100",
"30",
"50",
"60",
"80"]);