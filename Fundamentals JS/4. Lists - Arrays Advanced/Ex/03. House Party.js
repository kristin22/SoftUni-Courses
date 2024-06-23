function houseParty(commands) {
    let list = [];
    
    for(let i = 0; i < commands.length; i++) {
        let currCMND = commands[i].split(" ");
        if(currCMND[2] === "going!") {
            let found = list.find(element => element === currCMND[0]);
            if (found === undefined) {
                list.push(currCMND[0]);
            } else {
                console.log(`${currCMND[0]} is already in the list!`);
            }
            
        } else if(currCMND[2] === "not") {
            let found = list.findIndex(element => element === currCMND[0]);
            if (found === -1) {
                console.log(`${currCMND[0]} is not in the list!`); 
            } else {
                // remove him/her from the list
                list.splice(found, 1);
            }
        }
    }

    console.log(list.join("\n"));
}

houseParty(['Allie is going!',
            'George is going!',
            'John is not going!',
            'George is not going!']);

houseParty(['Tom is going!',
            'Annie is going!',
            'Tom is going!',
            'Garry is going!',
            'Jerry is going!']);
