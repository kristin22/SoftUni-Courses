function pcFirm(input) {
    let pcCount = Number(input[0]);
    
    let rate = 0;
    let currNum = 0;
    let possible = 0;

    let salesCount = 0;
    let sumRate = 0;

    for(let i = 1; i <= pcCount; i++) {
        currNum = Number(input[i]);
        rate = currNum % 10;
        possible = Math.trunc(currNum / 10);

        sumRate += rate;
        if(rate === 2) {
            // no sales
        } else if(rate === 3) {
            salesCount += 0.5 * possible;
        } else if(rate === 4) {
            salesCount += 0.7 * possible;
        } else if(rate === 5) {
            salesCount += 0.85 * possible
        } else if(rate === 6) {
            salesCount += possible;

        }
    }

    console.log(salesCount.toFixed(2));
    console.log((sumRate / pcCount).toFixed(2));
}

pcFirm(["3",
"103",
"103",
"103"]);

pcFirm(["5",
"122",
"156",
"202",
"214",
"185"]);

pcFirm(["2",
"204",
"206"]);