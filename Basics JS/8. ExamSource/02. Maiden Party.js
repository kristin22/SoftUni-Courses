function maidenParty(input) {
    let partyPrice = Number(input[0]);
    let messagesCount = Number(input[1]);
    let rosesCount = Number(input[2]);
    let keychainCount = Number(input[3]);
    let pictureCount = Number(input[4]);
    let charmsCount = Number(input[5]);

    let total = messagesCount * 0.60 + rosesCount * 7.20 + keychainCount * 3.6 + pictureCount * 18.20 + charmsCount * 22;
    
    let productsCount = messagesCount + rosesCount + keychainCount + pictureCount + charmsCount;

    if(productsCount >= 25) {
        total *= 0.65;
    }

    total *= 0.90;

    if(total >= partyPrice) {
        console.log(`Yes! 795.75 lv left.`);
    } else {
        console.log(`Not enough money! 184.82 lv needed.`);
    }
}

maidenParty(["40.8",
"20",
"25",
"30",
"50",
"10"]);

maidenParty(["320",
"8",
"2",
"5",
"5",
"1"]);