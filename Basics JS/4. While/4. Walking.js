function steps (input) {    
    let target = 10000;
    let sum = 0;

    let index = 0;
    let command = input[index];

    while (command !== "Going home") {
       
        sum += Number(command); 

        if (sum >= target) {
            console.log("Goal reached! Good job!");
            console.log(`${sum - target} steps over the goal!`);
            break;
        }

        index++;
        command = input[index];
    }

    if (command === "Going home") {
        let stepsToHome = Number(input[index+1]);
        sum += stepsToHome;

        if (sum >= target){
            console.log("Goal reached! Good job!");
            console.log(`${sum - target} steps over the goal!`);
        } else {
            console.log(`${target - sum} more steps to reach goal.`);
        }
    } 
}

steps(["1000",
    "1500",
    "2000",
    "6500"]);

steps(["1500",
    "3000",
    "250",
    "1548",
    "2000",
    "Going home",
    "2000"]);

steps(["1500",
    "300",
    "2500",
    "3000",
    "Going home",
    "200"]);

steps(["125",
    "250",
    "4000",
    "30",
    "2678",
    "4682"])
