function division(input) {
    let n = Number(input[0]);

    let p2 = 0, p3 = 0, p4 = 0;
    let index = 1;
    for(let i = 1; i <= n; i++) {
        let curNum = input[index];
        if(curNum % 2 === 0) {
            p2++;
        }
        if(curNum % 3 === 0) {
            p3++;
        }
        if(curNum % 4 === 0) {
            p4++;
        }
        index++;
    }
   
    console.log(`${(p2 / n * 100).toFixed(2)}%`);
    console.log(`${(p3 / n * 100).toFixed(2)}%`);
    console.log(`${(p4 / n * 100).toFixed(2)}%`);
}

division(["10",
        "680",
        "2",
        "600",
        "200",
        "800",
        "799",
        "199",
        "46",
        "128",
        "65"]);

division(["3",
        "3",
        "6",
        "9"]);

