function bombNumbers(sequence, bombs) {
    // detonate every occurence if special bomb number

    while(sequence.includes(bombs[0])) {
        let bombIndex = sequence.findIndex(x => x === bombs[0]);

        let starts = bombIndex - bombs[1];
        let ends = bombIndex + bombs[1];

        if (starts < 0) {
            starts = 0;
        }
        if( ends >= sequence.length) {
            ends = sequence.length - 1;
        }

        sequence.splice(starts, 2 * bombs[1] + 1);
    }

    let sum = 0;
    for(let element of sequence) {
        sum += element;
    }
    
    console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);