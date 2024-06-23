function gardenBudget(input) {
    let flower = input[0];
    let count = Number(input[1]);
    let budget = Number(input[2]);

    let bill = 0;

    switch (flower) {
        case "Roses":
            bill = count * 5.00;
            if (count > 80) {
                bill *= 0.90;
            }
            break;
        case "Dahlias":
            bill = count * 3.80;
            if (count > 90) {
                bill *= 0.85;
            }
            break;
        case "Tulips":
            bill = count * 2.80;
            if (count > 80) {
                bill *= 0.85;
            }
            break;
        case "Narcissus":
            bill = count * 3.00;
            if (count < 120) {
                bill *= 1.15;
            }
            break;
        case "Gladiolus":
            bill = count * 2.50;
            if (count < 80) {
                bill *= 1.20;
            }
            break;
    }

    if (bill <= budget) {
        console.log(`Hey, you have a great garden with ${count} ${flower} and ${(budget - bill).toFixed(2)} leva left.`);        
    } else {
        console.log(`Not enough money, you need ${(bill - budget).toFixed(2)} leva more.`);
    }
}

gardenBudget(["Roses", "55", "250"]);
gardenBudget(["Tulips", "88", "260"]);
gardenBudget(["Narcissus", "119", "360"]);