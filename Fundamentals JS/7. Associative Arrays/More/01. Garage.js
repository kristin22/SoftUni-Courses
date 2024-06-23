function garages(input) {
    let garages = {};
    
    while (input.length !== 0) {

        let info = input.shift().split(" - ");
        let num = "Garage № " + info.shift();
        info = info.join("");

        info = "--- " + info;
        info = info.split(":").join(" -");

        if (!garages.hasOwnProperty(num)) {
                garages[num] = [];
        }

        garages[num].push(info);
    }
    

    for (let key in garages) {
        console.log(key);
        for (let value of garages[key]) {
                console.log(value);
        }

    }

}

garages(['1 - color: blue, fuel type: diesel', 
        '1 - color: red, manufacture: Audi', 
        '2 - fuel type: petrol', 
        '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);

garages(['1 - color: green, fuel type: petrol',
        '1 - color: dark red, manufacture: WV',
        '2 - fuel type: diesel',
        '3 - color: dark blue, fuel type: petrol']);