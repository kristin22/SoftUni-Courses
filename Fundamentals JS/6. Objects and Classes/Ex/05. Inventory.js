function inventory(arr) {
    let heroesArr = [];

    for(el of arr) {
        el = el.split(" / ");

        let obj = {
            name: el[0],
            level: el[1],
            items: el[2].split(", ")
        }
        heroesArr.push(obj);
    }

    heroesArr = heroesArr.sort((a,b) => a.level - b.level);
    
    for (heroObj of heroesArr) {
        console.log(`Hero: ${heroObj.name}`);
        console.log(`level => ${heroObj.level}`);
        console.log(`items => ${heroObj.items.join(", ")}`);
    }

}

inventory([ 'Isacc / 25 / Apple, GravityGun',
            'Derek / 12 / BarrelVest, DestructionSword',
            'Hes / 1 / Desolator, Sentinel, Antara' ]);

inventory([ 'Batman / 2 / Banana, Gun',
            'Superman / 18 / Sword',
            'Poppy / 28 / Sentinel, Antara' ]);