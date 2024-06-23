function expences(input) {
    let dogFoodCnt = input[0];
    let catFoodCnt = input[1];
    let sum = dogFoodCnt * 2.50 + catFoodCnt * 4.00;
    
    // console.log( sum + " lv.");
    console.log(`${sum} lv.`);
}

expences(["5", "4"]);
expences(["13", "9"]);
