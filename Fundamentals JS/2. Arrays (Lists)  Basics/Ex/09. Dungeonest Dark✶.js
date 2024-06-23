function dark(input) {
    let str = input[0];
    let arr = str.split("|");
    
    let health = 100;
    let coins = 0;

    let bestroom = 0;

    for(let i = 0; i < arr.length; i++) {
        str = arr[i];
        let currStr =  str.split(" ");
        bestroom++;

        if (currStr[0] === "potion") {
            let healedFor = 100 - health;
            health += Number(currStr[1]);

            if (health > 100) {
                health = 100;
                console.log(`You healed for ${healedFor} hp.`);
            } else {
                console.log(`You healed for ${currStr[1]} hp.`);
            }
            console.log(`Current health: ${health} hp.`);

        } else if (currStr[0] === "chest") {
            coins += Number(currStr[1]);
            console.log(`You found ${currStr[1]} coins.`);
        } else {
            health -= Number(currStr[1]);
            if (health > 0) {
                console.log(`You slayed ${currStr[0]}.`);
            } else {
                console.log(`You died! Killed by ${currStr[0]}.`);
                console.log(`Best room: ${bestroom}`);
                return;
            }
        }
    }

    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}

dark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);