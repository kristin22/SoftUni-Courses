function solve(str) {
    const arr = str.split("|");

    let health = 100;
    let coins = 0;

    for(let i = 0; i < arr.length; i++) {
        let curstr = arr[i];
        let currArr = curstr.split(" ");

        if (currArr[0] === "potion") {
            health += Number(currArr[1]);
            if (health > 100) {
                health = 100;
            }
            console.log(`You healed for ${currArr[1]} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (currArr[0] === "chest") {
            coins += Number(currArr[1]);
            console.log(`You found ${currArr[1]} bitcoins.`);
        } else {    // facing a monster
            health -= Number(currArr[1]);
            if (health > 0) {
                console.log(`You slayed ${currArr[0]}.`);
            } else {
                console.log(`You died! Killed by ${currArr[0]}.`);
                console.log(`Best room: ${i+1}`);
                return;
            }
        }
    }
    
    console.log("You've made it!");
    console.log(`Bitcoins: ${coins}`);
    console.log(`Health: ${health}`);
}

solve("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
solve("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");