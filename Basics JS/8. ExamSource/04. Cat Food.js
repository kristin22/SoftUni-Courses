function catFood(input) {
    let catsCount = Number(input[0]);
    
    let currFoodGr = 0;
    let group1 = 0, group2 = 0, group3 = 0;
    let total = 0;

    for (let i = 1; i <= catsCount; i++) {
        currFoodGr = Number(input[i]);
        total += currFoodGr;

        if(currFoodGr >= 100 && currFoodGr < 200) {
            group1++;
        } else if (currFoodGr >= 200 && currFoodGr < 300) {
            group2++;
        } else if (currFoodGr >= 300 && currFoodGr < 400) {
            group3++;
        }
    }
    

    total = (total / 1000) * 12.45;
    
    console.log(`Group 1: ${group1} cats.`);
    console.log(`Group 2: ${group2} cats.`);
    console.log(`Group 3: ${group3} cats.`);
    console.log(`Price for food per day: ${total.toFixed(2)} lv.`);

}

catFood(["6",
"102",
"236",
"123",
"399",
"342", 
"222"]);

catFood(["10",
"256",
"348",
"198",
"322",
"186",
"294",
"321",
"100",
"200",
"300"]);

catFood(["7",
"100",
"200",
"342",
"300",
"234",
"123",
"212"]);