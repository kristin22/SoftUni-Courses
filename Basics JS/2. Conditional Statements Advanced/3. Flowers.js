function flowerShop(input) {
    let hCnt = Number(input[0]);
    let rCnt = Number(input[1]);
    let lCnt = Number(input[2]);
    let season = input[3];
    let yn = input[4];

    let hPrice = 0, rPrice = 0, lPrice;

    switch (season) {
        case "Spring":
        case "Summer":
            hPrice = 2;
            rPrice = 4.10;
            lPrice = 2.50;
            break;
        case "Autumn":
        case "Winter":
            hPrice = 3.75;
            rPrice = 4.50;
            lPrice = 4.15;
            break;
    }

    let total = hCnt * hPrice + rCnt * rPrice + lCnt * lPrice;
    if (yn === "Y") {
        total *= 1.15;
    }

    if (season === "Spring" && lCnt > 7) {
        total *= 0.95;
    } else if (season === "Winter" && rCnt >= 10) {
        total *= 0.90;
    }

    if ((hCnt + rCnt + lCnt) > 20) {
        total *= 0.80;
    }

    total += 2;
    console.log(total.toFixed(2));
}


flowerShop([2,
    4,
    8,
    "Spring",
    "Y"]);

flowerShop([3,
    10,
    9,
    "Winter",
    "N"]);

flowerShop([10,
    10,
    10,
    "Autumn",
    "N"]);