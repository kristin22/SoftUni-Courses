function trainTrainers(input) {      
    let n = Number(input[0]);     // Брой на журито
    
    let index = 1;  // брояч за външния цикъл
    let command = input[index];

    let totalSum = 0;
    let gradesCnt = 0;

    while (command !== "Finish") {
        let currSum = 0;

        for (let i = 1; i <= n; i++) {
            let grade = Number(input[++index]);
            currSum += grade;
            gradesCnt++;
        }

        totalSum += currSum;
        
        let average = currSum / n;
        console.log(`${command} - ${average.toFixed(2)}.`);

        command = input[++index];
    }

    console.log(`Student's final assessment is ${(totalSum / gradesCnt).toFixed(2)}.`);
    
}

trainTrainers(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"]);

trainTrainers(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"]);