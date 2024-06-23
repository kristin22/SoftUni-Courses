function doorLock(input) {
    let hEnd = Number(input[0]);
    let tEnd = Number(input[1]);
    let uEnd = Number(input[2]);

    let h = 0, t = 0, u = 0;

    for( h = 2; h <= hEnd ; h++) {
        for( t = 2; t <= tEnd ; t++) {
            for( u = 2; u <= uEnd; u++) {
                let isPrime = t == 2 || t == 3 || t == 5 || t == 7;
                if((u % 2 === 0 && h % 2 === 0) && isPrime) {
                    console.log(`${h} ${t} ${u}`);
                }
            }
        }
    }
}

doorLock([3, 5, 5]);