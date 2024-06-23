function bonusScore(arr) {
    // {total bonus} = {student attendances} / {course lectures} * (5 + {additional bonus})

    arr = arr.map(x => Number(x));
    let students = arr[0];
    let lectures = arr[1];
    let addBonus = arr[2];


    let maxBonus = 0;
    let maxVisitLect = 0;

    for(let s = 3; s < arr.length; s++) {
        let currTotal = Math.ceil(arr[s] / arr[1] * (5 + arr[2]));
        if (currTotal >= maxBonus) {
            maxBonus = currTotal;
            maxVisitLect = arr[s];
        }
    }
    
    console.log(`Max Bonus: ${maxBonus}.`);
    console.log(`The student has attended ${maxVisitLect} lectures.`);
}

bonusScore(['5',  '25', '30',
            '12', '19', '24',
            '16', '20']);

bonusScore(['10', '30', '14', '8',
            '23', '27', '28', '15',
            '17', '25', '26', '5',
            '18']);