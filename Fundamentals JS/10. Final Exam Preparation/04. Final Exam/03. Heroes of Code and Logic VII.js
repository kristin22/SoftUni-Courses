function codeHeroesLogic(input) {
    let n = Number(input.shift());
    let heroes = {};
    for(let h = 0; h < n; h++) {
        let [hero, hp, mp] = input.shift().split(" ");
        heroes[hero] = {
            hp: Number(hp),
            mp: Number(mp)
        }
    }

    input.pop();
    input.forEach(line => {
        line = line.split(" - ");
        let cmnd = line.shift();
        if (cmnd === "CastSpell") {
            let [hero, needMP, spell] = line;
            if (heroes[hero].mp >= Number(needMP)) { // hero has the mp - reduce his mp
                heroes[hero].mp -= Number(needMP);
                console.log(`${hero} has successfully cast ${spell} and now has ${heroes[hero].mp} MP!`);
            } else {
                console.log(`${hero} does not have enough MP to cast ${spell}!`);
            }
        } else if (cmnd === "TakeDamage") {
            let [hero, damage, attacker] = line;
            heroes[hero].hp -= Number(damage);

            if (heroes[hero].hp > 0) { 
                console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${heroes[hero].hp} HP left!`);
            } else {
                delete heroes[hero];
                console.log(`${hero} has been killed by ${attacker}!`);
            }
        } else if (cmnd === "Recharge") {   // mp
            let [hero, amount] = line;
            let prevMP = heroes[hero].mp;
            heroes[hero].mp += Number(amount);
            if (heroes[hero].mp > 200) {
                heroes[hero].mp = 200;
            }
            console.log(`${hero} recharged for ${heroes[hero].mp - prevMP} MP!`);
            
        } else if (cmnd === "Heal") {   // hp
            let [hero, amount] = line;
            let prevHP = heroes[hero].hp;
            heroes[hero].hp += Number(amount);
            if (heroes[hero].hp > 100) {
                heroes[hero].hp = 100;
            }

            console.log(`${hero} healed for ${heroes[hero].hp - prevHP} HP!`);
        }

    });


    // Output:
    for(let [hero, value] of Object.entries(heroes)) {
        console.log(`${hero}\n  HP: ${value.hp}\n  MP: ${value.mp} `);
    }

}

codeHeroesLogic([ "2",
                "Solmyr 85 120",
                "Kyrre 99 50",
                "Heal - Solmyr - 10",
                "Recharge - Solmyr - 50",
                "TakeDamage - Kyrre - 66 - Orc",
                "CastSpell - Kyrre - 15 - ViewEarth",
                "End" ]);

codeHeroesLogic([ "4",
                "Adela 90 150",
                "SirMullich 70 40",
                "Ivor 1 111",
                "Tyris 94 61",
                "Heal - SirMullich - 50",
                "Recharge - Adela - 100",
                "CastSpell - Tyris - 1000 - Fireball",
                "TakeDamage - Tyris - 99 - Fireball",
                "TakeDamage - Ivor - 3 - Mosquito",
                "End" ]);

