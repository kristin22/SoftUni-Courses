function tennis(input) {
    let rocketPrice = Number(input[0]);
    let rocketsCount = Number(input[1]);
    let shoesCnt = Number(input[2]);

    let total = (rocketsCount * rocketPrice) + ((rocketPrice / 6) * shoesCnt);
    total += ((rocketsCount * rocketPrice) + ((rocketPrice / 6) * shoesCnt)) * 0.2;

    console.log(`Price to be paid by Djokovic ${Math.floor(total / 8)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(total * 7 / 8)}`);
}

tennis(["850", "4", "2"]);
tennis(["386", "7", "4"]);