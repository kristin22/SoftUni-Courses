function expences(input) {
    let yearTax = Number(input[0]);
    let shoes = yearTax * 0.60;
    let clothes = shoes * 0.80;
    let ball = clothes / 4;
    let accessories = ball / 5;

    let total = yearTax + shoes + clothes + ball + accessories;
    console.log(total);
}

expences(["365"]);
expences(["550"]);