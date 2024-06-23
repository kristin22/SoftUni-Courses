function grades(entries) {
    const students = {};

    for (const entry of entries) {
        let curr = entry.split(" ");
        let name = curr.shift();            
        let grades =  curr.map(Number);     

        if(students.hasOwnProperty(name)) {
            for (let g of grades) {
                students[name].push(g);
            }
        } else {
            students[name] = grades;
        }
    }


    //TODO: Sort the object keys alphabetically     => Learn reduce();

    let sorted = Object.entries(students).sort((a, b) => a[0].localeCompare(b[0])).map((s) => {
        let average = 0;
        sorted[s].forEach(element => {
            average += element;
        });
        average /= sorted[s].length;
        sorted[s] = average;
        console.log(`${s}: ${average.toFixed(2)}`);
    });

    // for (const s in sorted) {
    //     let average = 0;
    //     sorted[s].forEach(element => {
    //         average += element;
    //     });
    //     average /= sorted[s].length;
    //     sorted[s] = average;
    //     console.log(`${s}: ${sorted[s].toFixed(2)}`);
    // }

/*

Object.entries(students).sort((a, b) => a[0].localeCompare(b[0])).map((grade) => {
        let sum = 0; grade[1].forEach(grades => sum += grades)
        let avarageGrade = grade[1].reduce((a, b) => a + b, 0) / grade[1].length
        console.log(`${grade[0]}: ${avarageGrade.toFixed(2)}`)
});

*/
}

grades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);

grades(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3']);