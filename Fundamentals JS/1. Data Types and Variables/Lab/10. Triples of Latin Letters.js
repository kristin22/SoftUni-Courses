function tripleLetters(num) {
    num = Number(num);

    let stopperF = 0;
    let stopperS = 0;
    let stopperT = 0;

    for (let first = 97; first <= 122; first++) {    // String.fromCharCode(94 + i);
        stopperS = 0;
        
        for (let second = 97; second <= 122; second++) {
            stopperS++;
        stopperT = 0;

            for (let third = 97; third <= 122; third++ ) {
                stopperT++;
                let word = `${String.fromCharCode(first)}${String.fromCharCode(second)}${String.fromCharCode(third)}`
                console.log(word);

                if (stopperT === num) {
                    break;
                }
            }
            if (stopperS === num) {
                break;
            }
        }
        stopperF++;

        if (stopperF === num) {
            return;
        }
    }
}

tripleLetters('3');