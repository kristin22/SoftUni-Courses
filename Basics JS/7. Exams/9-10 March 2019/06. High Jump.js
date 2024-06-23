function highJump(input) {  
  let wantedHeight = Number(input[0]);
  let currAimHight = wantedHeight - 30;

  let index = 1;
  let currJump = input[index];
  let counter = 0;
  let totalJumps = 0;

  while (true) {
    totalJumps++;
    if (currJump > currAimHight) {
      currAimHight += 5;
      counter = 0;
      if (currJump > wantedHeight) {
        break;
      }
    } else {
      counter++;
      if (counter === 3) {
        break;
      }
    }

    currJump = input[++index];
  }

  if (currJump > wantedHeight) {
    console.log(`Tihomir succeeded, he jumped over ${wantedHeight}cm after ${totalJumps} jumps.`);
  } else if (counter === 3) {
    console.log(`Tihomir failed at ${currAimHight}cm after ${totalJumps} jumps.`);
  }

}


function highJump(input) {
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


highJump(["231", "205", "212", "213", "228", "229", "230", "235"]);
highJump(["250",
        "225",
        "224",
        "225",
        "228",
        "231",
        "235",
        "234",
        "235"])



 
