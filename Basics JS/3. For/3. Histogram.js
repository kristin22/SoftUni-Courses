function histogram(input) {
    let n = Number(input[0]);
    let currNum = 0;
    let p1 = 0, p2 = 0, p3 = 0, p4 = 0, p5 = 0;

    for (let index = 1; index <= n; index++) {
        currNum = Number(input[index]); 
        if (currNum < 200) {
            p1++;
        } else if (currNum >= 200 && currNum <= 399) {
            p2++;
        } else if (currNum >= 400 && currNum <= 599) {
             p3++;
        } else if (currNum >= 600 && currNum <= 799) {
            p4++;
        } else if (currNum >= 800) {
            p5++;
        }
    }

    console.log(`${(p1 / n * 100).toFixed(2)}%`);
    console.log(`${(p2 / n * 100).toFixed(2)}%`);
    console.log(`${(p3 / n * 100).toFixed(2)}%`);
    console.log(`${(p4 / n * 100).toFixed(2)}%`);
    console.log(`${(p5 / n * 100).toFixed(2)}%`);
}

histogram(["3", "1", "2", "999"]);
// histogram(["7", "800", "801", "250", "199", "399",  "599", "799"]);
// histogram(["9", "367", "99", "200", "799", "999", "333", "555", "111", "9"]);
// histogram(["14", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250",  "680", "2", "600", "200"]);