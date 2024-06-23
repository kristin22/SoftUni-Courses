function exam(arr) {
    let maxBadGrades = arr[0];
    let badGrades = Number(arr[0]);
    let index = 1;
    let problemName = arr[index];
    let grade = 0;
    let sum = 0;
    let cnt = 0;
    let lastProblem = "";

    while (problemName !== "Enough") {
        grade = Number(arr[index+1]);
        cnt++;
        sum += grade;

        if (grade <= 4) {
            badGrades--;
            if (badGrades === 0) {
                break;
            }
        }

        lastProblem = problemName;
        index += 2;
        problemName = arr[index];
    }

    if (problemName === "Enough") {
        console.log(`Average score: ${(sum / cnt).toFixed(2)}`);
        console.log(`Number of problems: ${cnt}`)
        console.log(`Last problem: ${lastProblem}`)

    } else if (badGrades === 0) {
        console.log(`You need a break, ${maxBadGrades} poor grades.`);
    }

}

exam(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"]);

exam(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"]);
