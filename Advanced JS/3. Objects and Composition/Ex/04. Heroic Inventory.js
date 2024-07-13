function heroicInventory(arr) {
    let result = [];

    arr.forEach(el => {
        let [name, level, items] = el.split(" / ");
        let obj = { name, level: +level, items: items? items.split(", ") : [] };
        
        if(obj.name !== "") { result.push(obj); };
    });

    let output = JSON.stringify(result);

    return output;
}

console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
                            'Derek / 12 / BarrelVest, DestructionSword',
                            'Hes / 1 / Desolator, Sentinel, Antara']));
console.log("==================");
console.log(heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']));