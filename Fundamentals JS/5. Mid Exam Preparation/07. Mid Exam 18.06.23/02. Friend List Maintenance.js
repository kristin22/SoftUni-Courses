function friendsList(commands) {
    let friends = commands.shift().split(", ");

    let currCommand = commands.shift();
    let blacklistedCnt = 0;
    let lostCnt = 0;

    while(currCommand !== "Report") {
        currCommand = currCommand.split(" ");

        let index = friends.indexOf(currCommand[1]);

        switch (currCommand[0]) {
            case "Blacklist": 
                if (index > -1) {
                    console.log(`${currCommand[1]} was blacklisted.`);
                    friends[index] = "Blacklisted";
                    blacklistedCnt++;

                } else {
                    console.log(`${currCommand[1]} was not found.`);
                }
                break;
            case "Error": 
                index =  Number(currCommand[1]);
                if ((index > -1 && index < friends.length) && friends[index] !== "Lost" && friends[index] !== "Blacklisted") {
                    lostCnt++;
                    console.log(`${friends[index]} was lost due to an error.`);
                    friends[index] = "Lost";
                }
                break;
            case "Change": 
                index =  Number(currCommand[1]);

                if ((index) > -1 && index < friends.length) {
                    console.log(`${friends[index]} changed his username to ${currCommand[2]}.`);
                    friends[index] = currCommand[2];
                }
            
                break;
        }

        currCommand = commands.shift();
    }

    console.log(`Blacklisted names: ${blacklistedCnt}`);
    console.log(`Lost names: ${lostCnt}`);
    console.log(friends.join(" "));
}

friendsList(["Mike, John, Eddie",
            "Blacklist Mike",
            "Error 0",
            "Report"]);

friendsList(["Mike, John, Eddie, William",
            "Error 3",
            "Error 3",
            "Change 0 Mike123",
            "Report"]);

friendsList(["Mike, John, Eddie, William",
            "Blacklist Maya",
            "Error 1",
            "Change 4 George",
            "Report"]);