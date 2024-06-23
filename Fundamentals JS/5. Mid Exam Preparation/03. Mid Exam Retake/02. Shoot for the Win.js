function winShot(arr) { 
    let str = arr[0];
    
    let sequence = str.split(" ");
    sequence = sequence.map(x => Number(x));

    let shotTargets = 0;
    
    for(let i = 1; i < arr.length - 1; i++) {
        let index = Number(arr[i]);
        if (index >= sequence.length) {
            continue;
        }

        let  num = sequence[index];

        for(let j = 0; j < sequence.length; j++) {
            if (sequence[j] !== -1) {
                if (sequence[j] > num ) {
                    sequence[j] = sequence[j] - num
                } else if (sequence[j] <= sequence[index]) {
                    sequence[j] = sequence[j] + num;
                }

 
            }

        }

        sequence[index] = -1;    
        shotTargets++;

    }

    console.log(`Shot targets: ${shotTargets} -> ${sequence.join(" ")}`);

}

winShot(["24 50 36 70",
        "0",
        "4",
        "3",
        "1",
        "End"]);

winShot(["30 30 12 60 54 66",
        "5",
        "2",
        "4",
        "0",
        "End"]);