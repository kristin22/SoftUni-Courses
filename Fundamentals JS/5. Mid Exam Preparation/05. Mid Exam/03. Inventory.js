function inventory(input) {
    let stash = input.shift().split(", ");

    let command = input.shift().split(" - ");

    while (command[0] !== "Craft!") {
        if(command[0] === "Collect") {
            if(stash.includes(command[1]) === false) {
                stash.push(command[1]);
            }
        } else if (command[0] === "Drop") {
            if(stash.indexOf(command[1]) >= 0) {
                stash.splice(stash.indexOf(command[1]), 1);
            }
        } else if (command[0] === "Combine Items") {

        } else if (command[0] === "Renew") {

        }

        command = input.shift().split(" - ");
    }

    console.log(stash.join(", "));


    // console.log(stash);
}

inventory(['Iron, Wood, Sword', 
        'Collect - Gold', 
        'Drop - Wood', 
        'Craft!']);

inventory(['Iron, Sword',
        'Drop - Bronze',
        'Combine Items - Sword:Bow',
        'Renew - Iron',
        'Craft!']);