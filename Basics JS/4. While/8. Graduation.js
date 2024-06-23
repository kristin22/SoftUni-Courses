function graduation(arr) {
    let name = arr[0];
    let index = 1;
    let grade = Number(arr[index]);
    let sum = 0;
    let average = 0;
    let badGrades = 0;

    while (index <= 12) {
        sum += grade;

        if (grade < 4) {
            badGrades++;
            if (badGrades > 1) {
                break;
            }
        }

        index++;
        grade = Number(arr[index]);
    }

    average = sum / 12;

    if (badGrades > 1) {
        console.log(`${name} has been excluded at ${index - 1} grade`);
    } else {
        console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
    }

} 

graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"]);

graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])