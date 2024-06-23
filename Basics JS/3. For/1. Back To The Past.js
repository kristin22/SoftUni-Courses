function backFromPast(input) {
    let inheritance = Number(input[0]);
    let tillYear = Number(input[1]);
    let needed = 0;
    let age = 18;

    for(let i = 1800; i <= tillYear; i++) {

        if (i % 2 === 0) {
            needed += 12000;
        } else {
            needed += (12000 + 50 * age);
        }
        age++;
    }

    if (needed <= inheritance) {
        console.log(`Yes! He will live a carefree life and will have ${(inheritance - needed).toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${(needed - inheritance).toFixed(2)} dollars to survive.`);
    }
}

backFromPast([50000,
             1802]);

backFromPast([100000.15,
    1808]);