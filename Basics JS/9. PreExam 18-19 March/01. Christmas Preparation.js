function christmasPrep(input) {
    let rollsWrapCount = Number(input[0]);
    let rollsClothCount = Number(input[1]);
    let glueLiters = Number(input[2]);
    let discountPr = Number(input[3]) / 100;

    let total = rollsWrapCount * 5.80 + rollsClothCount * 7.20 + glueLiters * 1.20;
    total -= (discountPr * total);
    console.log(total.toFixed(3));
}

christmasPrep(['2', '3', '2.5', '25']);
christmasPrep(['4', '2', '5', '13']);
christmasPrep(['7', '8', '0.5', '45']);