function darts(input) {
    let playerName = input[0];
    let playerPoints = 301;
    
    let wins = 0;
    let loses = 0;
    
    let index = 1;
    let command = input[index];
    while(command !== "Retire") {
        let field = command;
        command = Number(input[++index]);
        let currentPoints = Number(command);
        
         if(field === "Double") {
            currentPoints *= 2;    
        } else if(field === "Triple") {
            currentPoints *= 3;
        }

        if(currentPoints > playerPoints){
            loses++;
            command = input[++index];
            continue;
        }
        playerPoints -= currentPoints;
        wins++;
        if(playerPoints === 0) {
            break;
        }

        command = input[++index];

    }

    if(command === "Retire") {
        console.log(`${playerName} retired after ${loses} unsuccessful shots.`);
    } else {
        console.log(`${playerName} won the leg with ${wins} shots.`);
    }

}

darts(["Michael van Gerwen",
    "Triple",
    "20",
    "Triple",
    "19",
    "Double",
    "10",
    "Single",
    "3",
    "Single",
    "1",
    "Triple",
    "20",
    "Triple",
    "20",
    "Double",
    "20"]);

darts(["Stephen Bunting",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Double",
"7",
"Single",
"12",
"Double",
"1",
"Single",
"1"]);

darts(["Rob Cross",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Double",
"20",
"Triple",
"20",
"Double",
"5",
"Triple",
"10",
"Double",
"6",
"Retire"]);

/*

function demo(input) {
	let playerName;
	getline(cin >> ws, playerName);

	let starterPoints = 301;

	string field;
	int points;
	int successfull = 0;
	int unsuccessfull = 0;

	while (true) {
		getline(cin >> ws, field);
		if (field == "Retire") {
			cout << playerName << " retired after " << unsuccessfull << " unsuccessful shots." << endl;
			break;
		}
		cin >> points;
		if (field == "Single") {
			points *= 1;
		}
		else if (field == "Double") {
			points *= 2;
		}
		else if (field == "Triple") {
			points *= 3;
		}
		if (points <= starterPoints) {
			starterPoints -= points;
			successfull++;
		}
		else {
			unsuccessfull++;
			continue;
		}
		if (starterPoints == 0) {
			cout <<  playerName << " won the leg with "<< successfull <<" shots." << endl;
			break;
		}
	}

}

*/