function harvest(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let z = Number(input[2]);
    let workers = Number(input[3]);

    let sumGrape = x * y;
    let wine = 0.40 * sumGrape / 2.5;

    if (wine >= z) {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${Math.ceil(wine - z)} liters left -> ${Math.ceil((wine - z) / workers)} liters per person.`);
    } else {
        console.log(`It will be a tough winter! More ${Math.floor(z - wine)} liters wine needed.`);
    }
}

harvest([650, 2, 175, 3]);
harvest([1020, 1.5, 425, 4]);