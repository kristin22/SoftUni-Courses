function lilly(input) {
    let age = Number(input[0]);
    let washerPrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let money = 10;
    let sum = 0;
    let toys = 0;

    for (let index = 1; index <= age; index++) {
        if (index % 2 === 0) {  // money
            sum += (money - 1);
            money += 10;
        } else {    // toys
            toys += 1;
        }
    }

    sum += (toyPrice * toys);

    if (sum >= washerPrice) {
        console.log(`Yes! ${(sum - washerPrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washerPrice - sum).toFixed(2)}`);
    }
    
}

lilly(["10", "170.00", "6"]);
lilly (["21", "1570.98", "3"]);
