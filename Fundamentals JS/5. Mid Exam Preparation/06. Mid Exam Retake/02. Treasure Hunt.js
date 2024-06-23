function hunt(arr) {
    let chest = arr[0].split("|");

    
    for(let i = 1; i < arr.length - 1; i++) {
        let workArr = arr[i].split(" ");

        if (workArr[0] === "Loot") {
            workArr.shift();
            // search for every element from workArr in chest and if it's missing add it
            for(let i = 0; i < workArr.length; i++) {
                const isIndex = (element) => element === workArr[i];
                let index = chest.findIndex(isIndex);

                if (index === -1) {
                    chest.unshift(workArr[i]);
                }
            } 
        } else if (workArr[0] === "Drop") {
            if(Number(workArr[1]) > -1) {
                let a = chest[Number(workArr[1])];
                chest.splice(Number(workArr[1]), 1);
                chest.push(a);
            }
        } else if (workArr[0] === "Steal") {
            let n = Number(workArr[1]);
            if (n <= -1) {continue;}
            let stolen = [];
            for(let i = 1; i <= n; i++) {
                stolen.push(chest[chest.length - 1]);
                chest.pop();
            }
            console.log(stolen.join(", "));

        }
    }

    let credits = 0;
    for(let i = 0; i < chest.length; i++) {
        credits += chest[i].length;
    }
    credits /= chest.length;
    if(credits > 0) {
        console.log(`Average treasure gain: ${credits.toFixed(2)} pirate credits.`);
    } else {
        console.log(`Failed treasure hunt.`);
    }
}

hunt(["Gold|Silver|Bronze|Medallion|Cup",
        "Loot Wood Gold Coins",
        "Loot Silver Pistol",
        "Drop 3",
        "Steal 3",
        "Yohoho!"]);

hunt(["Diamonds|Silver|Shotgun|Gold",
        "Loot Silver Medals Coal",
        "Drop -1",
        "Drop 1",
        "Steal 6",
        "Yohoho!"]);