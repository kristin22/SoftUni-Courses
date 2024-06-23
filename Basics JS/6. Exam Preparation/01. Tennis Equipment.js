function tennisEquipment(input) {
    let rocketPricePer1 = Number(input[0]);
    let rocketsCount = Number(input[1]);
    let shoesCount = Number(input[2]);

    let rocketsPrice = rocketsCount * rocketPricePer1;
    let shoesPrice = shoesCount * (rocketPricePer1 / 6);
    let equipmentPrice = 0.2 * (rocketsPrice + shoesPrice);
    let total = rocketsPrice + shoesPrice + equipmentPrice;

    let djocovic = total / 8;
    let sponsors = total * 7 / 8;

    console.log(`Price to be paid by Djokovic ${Math.floor(djocovic)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(sponsors)}`);
}

tennisEquipment(["850",
"4",
"2"]);

tennisEquipment(["1000",
"3",
"1"]);

tennisEquipment(["386",
"7",
"4"]);