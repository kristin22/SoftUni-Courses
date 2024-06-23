function income(input) {
    let vegPrice = Number(input[0]);
    let fruitPrice = Number(input[1]);
    let allVegKG = Number(input[2]);
    let allFruitKG = Number(input[3]);

    let bill = (vegPrice * allVegKG) + (fruitPrice * allFruitKG);
    bill /= 1.94;
    console.log(bill.toFixed(2));
}

income(["0.194", "19.4", "10", "10"]);
income(["1.5", "2.5", "10", "10"]);