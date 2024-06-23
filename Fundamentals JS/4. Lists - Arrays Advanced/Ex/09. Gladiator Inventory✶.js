function gladiatorInventory(commands) {    
    let inventory = commands.shift().split(" ");

    for(let command of commands) {
        command = command.split(" ");

        let contains = (element) => element === command[1];
        let index = inventory.findIndex(contains);

        if (command[0] === "Buy") {
            if (index === -1) {
                inventory.push(command[1]);
            }
        } else if (command[0] === "Trash") {
            if(index !== -1) {
                inventory.splice(index, 1);
            }
        } else if (command[0] === "Repair") {
            if(index !== -1) {
                inventory.push(command[1]);
                inventory.splice(index, 1);
            }

        } else if (command[0] === "Upgrade") {
            let upgrade = command[1].split("-");

            contains = (element) => element === upgrade[0];
            index = inventory.findIndex(contains);

            upgrade.shift();
            upgrade = upgrade.toString();

            if(index !== -1) {
                inventory.splice((index + 1), 0,  inventory[index] + `:${upgrade}`);
            }
        }
    }



    console.log(inventory.join(" "));
}

gladiatorInventory(['SWORD Shield Spear',
                    'Buy Bag',
                    'Trash Shield',
                    'Repair Spear',
                    'Upgrade SWORD-Steel']);

gladiatorInventory(['SWORD Shield Spear',
                    'Trash Bow',
                    'Repair Shield',
                    'Upgrade Helmet-V']);