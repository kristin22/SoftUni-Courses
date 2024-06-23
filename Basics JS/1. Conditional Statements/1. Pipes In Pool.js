function pipes(input) {
    let volume = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let hours = Number(input[3]);

    let p1Fill = hours * p1;
    let p2Fill = hours * p2;
    let sum = p1Fill + p2Fill;
    // x% * all = part => x = (all / part) / 100;
    let p1prcnt = (p1Fill / sum) * 100; 
    let p2prcnt = (p2Fill / sum) * 100; 
    let prcntFull = (sum / volume) * 100;


    if (sum > volume) {    //Aко басейнът се е препълнил
        console.log(`For ${hours} hours the pool overflows with ${(sum - volume).toFixed(2)} liters.`);
    } else {
        console.log(`The pool is ${prcntFull.toFixed(2)}% full. Pipe 1: ${p1prcnt.toFixed(2)}%. Pipe 2: ${p2prcnt.toFixed(2)}%.`);
    }


}

pipes([1000, 100, 120, 3]);
pipes([100, 100, 100, 2.5]);
