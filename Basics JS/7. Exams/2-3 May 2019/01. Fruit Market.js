// It shows correct data but judje shows error 

// function fruitMarket(input) {
//     let strawberiesPrice = Number(input[0]);
//     let bananas = Number(input[1]);
//     let oranges = Number(input[2]);
//     let raspberries = Number(input[3]);
//     let strawberies = Number(input[4]);

//     let raspberriesPrice = strawberiesPrice / 2;
//     let orangesPrice = 0.60 * raspberriesPrice;
//     let bananasPrice = 0.20 * raspberriesPrice;

//     let total = raspberries * raspberriesPrice + oranges * orangesPrice + bananas * bananasPrice + strawberies * strawberiesPrice;
//     console.log(total.toFixed(2));
// }

function fruitMarket(input) {
    let strawberryPrice = Number(input[0]);    
    let bananaKg = Number(input[1]);
    let orangesKg = Number(input[2]);
    let raspberriesKg = Number(input[3]);
    let strawberryKg = Number(input[4]);

    let raspberryPrice = 0.5 * strawberryPrice;
    let orangePrice = 0.60 * raspberryPrice;
    let bananaPrice = 0.20 * raspberryPrice;

    let total = (strawberryKg * strawberryPrice) + (raspberriesKg * raspberryPrice) + (orangesKg * orangePrice) + (bananaKg * bananaPrice);
    console.log(total.toFixed(2));

}

fruitMarket(["48",
            "10",
            "3.3",
            "6.5",
            "1.7"]);

fruitMarket(["63.5",
            "3.57",
            "6.35",
            "8.15",
            "2.5"]);




