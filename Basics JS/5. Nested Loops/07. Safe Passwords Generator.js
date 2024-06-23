function passGenerator(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let maxPassCnt = Number(input[2]);
    let comboCnt = 0;
    let text = "";

    // cdxydc   FINISH IT AND FIND THE ERR
    let c = 35;
    let d = 64;

    for(let x = 1; x <= a; x++) {
        for(let y = 1; y <= b; y++) {
            if(c > 55) {c = 35;}
            if(d > 96) {d = 64;}

            text += `${String.fromCharCode(c)}${String.fromCharCode(d)}${x}${y}${String.fromCharCode(d)}${String.fromCharCode(c)}|`;
            comboCnt++;
            if(comboCnt === maxPassCnt) {
                console.log(text);
                return;
            }

            c++;
            d++;
        }
    }


    if(comboCnt < maxPassCnt) {
        console.log(text);
    }

}

passGenerator([2, 3, 10]);
passGenerator([20, 50, 10]);