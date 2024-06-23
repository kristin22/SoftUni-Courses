function flowers(input) {
    let magnolias = Number(input[0]);
    let zumbuls = Number(input[1]);
    let roses = Number(input[2]);
    let cactuses = Number(input[3]);
    let presentPrice = Number(input[4]);

    let sum = magnolias * 3.25 + zumbuls * 4.00 + roses * 3.50 + cactuses * 8.00;
    sum *= 0.95; // 5% данъци

    let difference = Math.abs(sum - presentPrice);
    if (sum >= presentPrice) {
        console.log(`She is left with ${Math.floor(difference)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(difference)} leva.`);
    }

}

flowers([2, 3, 5, 1, 50]);
flowers([15, 7, 5, 10, 100]);