function CtoF(input) {
    let c = Number(input[0]);
    let f = c * 1.8 + 32;
    console.log(f.toFixed(2));
}

CtoF(["25"]);
CtoF(["0"]);
CtoF(["-5.5"]);
CtoF(["32.3"]);