function foodBill(input) {
    let chichenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let veggieMenus = Number(input[2]);
    let bill = (chichenMenus * 10.35 + fishMenus * 12.40 + veggieMenus * 8.15) * 1.20 + 2.50;
    console.log(bill);
}

foodBill(['2', '4', '3']);
foodBill(['9', '2', '6']);
