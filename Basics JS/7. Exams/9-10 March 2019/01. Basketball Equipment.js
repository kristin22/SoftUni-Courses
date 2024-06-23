function basketball(input) {
    let tax = Number(input[0]);

    let shoes = 0.6 * tax;
    let clothes = 0.8 * shoes;
    let ball = 0.25 * clothes;
    let other = 0.2 * ball;

    let total = tax + shoes + clothes + ball + other;
    console.log(total.toFixed(2));
}

basketball(["320"]);
basketball(["550"]);
basketball(["230"]);