function catDiet(input) {
    let fatPr = Number(input[0]);
    let proteinPr = Number(input[1]);
    let carbsPr = Number(input[2])
    let kcalTotal = Number(input[3]);
    let waterPr = Number(input[4]);

    let foodWeight = ((fatPr / 100) * kcalTotal) / 9;
        foodWeight += ((proteinPr / 100) * kcalTotal) / 4;
        foodWeight += ((carbsPr / 100) * kcalTotal) / 4;

    let kcalPer1gr = kcalTotal / foodWeight;
        kcalPer1gr -= (waterPr / 100) * kcalPer1gr;

    console.log(kcalPer1gr.toFixed(4));
}

catDiet(["60",
"25",
"15",
"2500",
"60"]);


catDiet(["40",
"40",
"20",
"3000",
"40"]);

catDiet(["20",
"60",
"20",
"1800",
"50"]);