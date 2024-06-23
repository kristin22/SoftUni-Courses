function buildWall(wall) {
    let costs = [];
    let sum = 0;
    // 1 foot = 195 cubic,   1 cubic = 1900 pesos
    
    while(wall[0] < 30 || wall[1] < 30 || wall[0] < 30) {
        let currCost = 0;
        for(let i = 0; i < 3; i++) {
            if (wall[i] < 30) {
                wall[i] = wall[i] + 1;
                currCost += 195;
            }
        }
        costs.push(currCost);
        sum += currCost;
    }

    

    console.log(costs.join(", "));
    console.log(`${sum * 1900} pesos`);
}

buildWall([21, 25, 28]);