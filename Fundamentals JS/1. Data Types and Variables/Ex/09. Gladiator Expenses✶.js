function expences(loses, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmets = 0;
    let swords = 0;
    let shields =  0;
    let armors = 0;

    for (let i = 1; i <= loses; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            helmets++;
            swords++;
            shields++;
            if (shields % 2 === 0) {
                armors++;
            }
        } else if (i % 2 === 0) {
            helmets++;
        } else if (i % 3 === 0) {
            swords++;
        }
    }

    let total = helmets * helmetPrice + swords * swordPrice + shields * shieldPrice + armors * armorPrice;
    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
}

expences(7, 2, 3, 4, 5);
expences(23, 12.50, 21.50, 40, 200);