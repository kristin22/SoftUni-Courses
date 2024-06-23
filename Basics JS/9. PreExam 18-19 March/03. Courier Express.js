function courier(input) {
    let orderWeight = Number(input[0]);
    let serviceType = input[1];
    let distanceKm = input[2];

    let total = 0;
    let pricePerKm = 0;
    if(orderWeight < 1) {
        pricePerKm = 0.03;
    } else if(orderWeight >= 1 && orderWeight < 10) {
        pricePerKm = 0.05;
    } else if(orderWeight >= 10 && orderWeight < 40) {
        pricePerKm = 0.10;
    } else if(orderWeight >= 40 && orderWeight < 90) {
        pricePerKm = 0.15;
    } else if(orderWeight >= 90 && orderWeight < 150) {
        pricePerKm = 0.20;
    }
    total += distanceKm * pricePerKm;

    let addPrice = 0;
    switch(serviceType) {
        case 'standard':
            break;
        case 'express':
            if(orderWeight < 1) {
                addPrice += 0.80 * pricePerKm;
            } else if(orderWeight >= 1 && orderWeight < 10) {
                addPrice += 0.40 * pricePerKm
            } else if(orderWeight >= 10 && orderWeight < 40) {
                addPrice += 0.05 * pricePerKm
            } else if(orderWeight >= 40 && orderWeight < 90) {
                addPrice += 0.02 * pricePerKm
            } else if(orderWeight >= 90 && orderWeight < 150) {
                addPrice += 0.01 * pricePerKm
            }
            break;
    }

    let addTotal = addPrice * orderWeight * distanceKm; 
    total += addTotal;

    console.log(`The delivery of your shipment with weight of ${orderWeight.toFixed(3)} kg. would cost ${total.toFixed(2)} lv.`);
}

courier(["1.5",
"standard",
"100"]);

courier(["87",
"express",
"130"]);

courier(["20", 
"standard",
"349"]);