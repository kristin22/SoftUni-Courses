function creditSystem(input) {
    let n =  Number(input[0]);

    let currNum = 0;
    let currGrade = 0;
    let currCredits = 0;

    let credits = 0;
    let averageGrade = 0;

    for (let i = 1; i <= n; i++) {
        currNum = Number (input[i]);
        currGrade = currNum % 10;
        currCredits = Math.floor(currNum / 10);

        averageGrade += currGrade;
       
        if (currGrade === 3) {
            credits += 0.5 * currCredits;
        } else if (currGrade === 4) {
            credits += 0.7 * currCredits;
        } else if (currGrade === 5) {
            credits += 0.85 * currCredits;
        } else if (currGrade === 6) {
            credits += currCredits;
        }
    }

    averageGrade /= n;

    console.log(credits.toFixed(2));
    console.log(averageGrade.toFixed(2));
}

creditSystem(["3", "103", "103", "103"]);
creditSystem(["5", "122", "156", "202", "214", "185"]);
creditSystem(["2", "204", "206"]);