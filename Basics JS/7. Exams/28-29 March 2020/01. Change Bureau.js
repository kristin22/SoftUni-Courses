function changeBureau(input) {
    let bitcoinCount = Number(input[0]);
    let juanCount = Number(input[1]);
    let comission = Number(input[2]);

    // bitcoin --> euro

    let bitcoinTolv = bitcoinCount * 1168; 
    let juanToLv = juanCount * 0.15 * 1.76;
    let total = (bitcoinTolv + juanToLv) / 1.95;
    total *= (1 - (comission / 100));

   console.log(total.toFixed(2));
}

changeBureau(["1",
"5",
"5"]);