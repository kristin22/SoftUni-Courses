function grades(input) {
    let n = Number(input[0]) 
    let under3 = 0, under4 = 0, under5 = 0, under6 = 0;
    let currGrade = 0;
    let allGrades = 0;
    let gradesSum = 0;

    for(let index = 1; index <= n; index++) {
        currGrade = Number(input[index]);
        gradesSum += currGrade;
        if (currGrade >= 2 && currGrade < 3) {
            under3++;
        } else if (currGrade >= 3 && currGrade < 4) {
            under4++;
        } else if (currGrade >= 4 && currGrade < 5) {
            under5++;
        } else if (currGrade >= 5 && currGrade <= 6) {
            under6++;
        }
    }

    allGrades += under3 + under4 + under5 + under6;

    console.log(`Top students: ${(under6 / allGrades * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(under5 / allGrades * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(under4 / allGrades * 100).toFixed(2)}%`);
    console.log(`Fail: ${(under3 / allGrades * 100).toFixed(2)}%`);
    console.log(`Average: ${(gradesSum / allGrades).toFixed(2)}`);

}

grades([10,
        3.00,
        2.99,
        5.68,
        3.01,
        4,
        4,
        6.00,
        4.50,
        2.44,
        5]);