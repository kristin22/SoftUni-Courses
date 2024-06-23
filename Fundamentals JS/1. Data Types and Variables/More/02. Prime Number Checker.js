function primeNumCheck(num) {
    let divideCount =0;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            divideCount++;
        }
    } 

    if(divideCount === 0) {
        console.log('true');
    } else {
        console.log('false');
    }
}

primeNumCheck(7);
primeNumCheck(8);
primeNumCheck(81);