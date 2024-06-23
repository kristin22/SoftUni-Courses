function pets(input) {
    let days = Number(input[0]);
    let foodLeft = Number(input[1]);
    let dogFood = Number(input[2]);
    let catFood = Number(input[3]);
    let turtleFood = Number(input[4]) / 1000;   // храната е в гр. и я преобразуваме в кг.

    let needFood = days * (dogFood + catFood + turtleFood);

    if (needFood <= foodLeft) {
        console.log(`${Math.floor(foodLeft - needFood)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(needFood - foodLeft)} more kilos of food are needed.`);
    }

}

pets([2, 10, 1, 1, 1200]);
pets([5, 10, 2.1, 0.8, 321]);