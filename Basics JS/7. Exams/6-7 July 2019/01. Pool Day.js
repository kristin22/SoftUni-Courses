function poolDay(input) {
    let peopleCnt = Number(input[0]);
    let taxEntrance = Number(input[1]);
    let bedPrice = Number(input[2]);
    let umbrellaPrice = Number(input[3]);
    let sum = 0;

    let tax = peopleCnt * taxEntrance;
    let beds = Math.ceil(0.75 * peopleCnt);
    let umbrellas = Math.ceil(0.50 * peopleCnt);
    sum += tax + beds * bedPrice + umbrellas * umbrellaPrice;
    
    console.log(`${sum.toFixed(2)} lv.`);
}

poolDay([21, 5.50, 4.40, 6.20]);
poolDay([50, 6, 8, 4]);