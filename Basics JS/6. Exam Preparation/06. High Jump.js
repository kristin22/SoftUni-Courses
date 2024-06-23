function highJump(input) {  70/100
    let aim = Number(input[0]);
    
    let currentJump = input[1];
    let index = 1;
    let tries = 0;
    let triesTotal = 1;

    let currentAim = aim - 30;

    while (currentJump <= aim) {
        tries++;
        triesTotal++;

        if (currentJump > currentAim) {
            currentAim += 5;
            tries = 0;
        } else {
            if (tries === 3) {
                break;
            }

        }

        currentJump = input[++index];
    }

    if (tries === 3) {
        console.log(`Tihomir failed at ${currentAim}cm after ${triesTotal - 1} jumps.`);
    } else if (currentJump > aim) {
        console.log(`Tihomir succeeded, he jumped over ${currentAim}cm after ${triesTotal} jumps.`);
    }
}

highJump(["231", 
"205", 
"212", 
"213", 
"228",
"229",
"230",
"235"]);

highJump(["250",
"225",
"224",
"225",
"228",
"231",
"235",
"234",
"235"]);


/*

function highJump(input) {  100/100
	let wantedHeight = Number(input[0]);;

    let index = 0;
    let currJump = input[index];

	let counter = 0;
	let totalJumps = 0;

	let isFailed = false;

	for (let currentAim = wantedHeight - 30; currentAim <= wantedHeight; currentAim += 5) {
		for (let i = 1; i <= 3; i++) {
			let currJump = input[++index];
			totalJumps++;

			if (currJump > currentAim) {
				counter = 0;
				break;
			} else {
				counter++;
			}
		}

		if (counter == 3) {
			console.log("Tihomir failed at " + currentAim + "cm after " + totalJumps + " jumps.");
			isFailed = true;
		}
	}

	if (!isFailed) {
		console.log("Tihomir succeeded, he jumped over " + wantedHeight + "cm after " + totalJumps + " jumps.");
	}

}


*/