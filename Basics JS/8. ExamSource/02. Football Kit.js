function footballKitt(input) {
    let tshirtPrice = Number(input[0]);
    let aimMoney = Number(input[1]);

    let shortsPrice = 0.75 * tshirtPrice;
    let socksPrice = 0.2 * shortsPrice;
    let shoesPrice =  2 * (tshirtPrice + shortsPrice);
    
    let sum = tshirtPrice + shortsPrice + socksPrice + shoesPrice ;
        sum *= 0.85;

    if(sum >= aimMoney) {
        console.log(`Yes, he will earn the world-cup replica ball!`);
        console.log(`His sum is ${sum} lv.`);
    } else {
        console.log(`No, he will not earn the world-cup replica ball.`);
        console.log(`He needs ${(aimMoney - sum).toFixed(2)} lv. more.`);
    }
}

footballKitt(["25",
"100"]);

footballKitt(["55",
"310"]);

footballKitt(["59.99",
"500"]);