function position(input) {      
    let n = Number(input[0]);

    let oddSum = 0, oddMin = Number.MAX_SAFE_INTEGER, oddMax = Number.MIN_SAFE_INTEGER;
    let evenSum = 0, evenMin = Number.MAX_SAFE_INTEGER, evenMax = Number.MIN_SAFE_INTEGER;

    for(let index = 1; index <= n; index++) {
        let curr = Number(input[index])
        if (index % 2 !== 0 ) {
            oddSum += curr;
            if (curr > oddMax) { 
                oddMax = curr;
            }
            if (curr < oddMin) {
                oddMin = curr;
            }
        } else {
            evenSum += curr;
            if (curr > evenMax){
                evenMax = curr;
            }
            if (curr < evenMin) {
                evenMin = curr;
            }
        }
    }

    console.log(`OddSum=${oddSum.toFixed(2)},`);
    if(oddMin === Number.MAX_SAFE_INTEGER){
        console.log("OddMin=No,");
    } else {
        console.log(`OddMin=${oddMin.toFixed(2)},`);
    }
    if(oddMax === Number.MIN_SAFE_INTEGER){
        console.log("OddMax=No,");
    } else {
        console.log(`OddMax=${oddMax.toFixed(2)},`);
    }

    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    if(evenMin === Number.MAX_SAFE_INTEGER){
        console.log("EvenMin=No,");
    } else {
        console.log(`EvenMin=${evenMin.toFixed(2)},`); 
    }
    if(evenMax === Number.MIN_SAFE_INTEGER){
        console.log("EvenMax=No");
    } else {
        console.log(`EvenMax=${evenMax.toFixed(2)}`);
    }
    
}

position([6,
        2,
        3,
        5,
        4,
        2,
        1]);
