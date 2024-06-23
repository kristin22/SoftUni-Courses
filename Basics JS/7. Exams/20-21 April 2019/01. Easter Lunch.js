function lunch(input) {
    let easterBreadCnt = Number(input[0]);
    let eggBoxesCnt = Number(input[1]);
    let cokiesKgs = Number(input[2]);

    let total = easterBreadCnt * 3.20 + eggBoxesCnt * 4.35 + cokiesKgs * 5.40;
    total += (eggBoxesCnt * 12 * 0.15);
    console.log(total.toFixed(2));
}

lunch(["3",
"2",
"3"]);

lunch(["4",
"4",
"3"]);

lunch(["2",
"3",
"2"]);