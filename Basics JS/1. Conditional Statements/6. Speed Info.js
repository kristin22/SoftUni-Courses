function speedCheck(input) {
    let speed = input[0];
    if(speed <= 10) {
        console.log("slow");
    } else if(speed > 10 && speed <= 50) {
        console.log("average");
    } else if(speed > 50 && speed <=150) {
        console.log("fast");
    } else if(speed > 150 && speed <= 1000) {
        console.log("ultra fast");
    } else {
        console.log("extremely fast");
    }
}

speedCheck(["8"]);
speedCheck(["49.5"]);
speedCheck(["126"]);
speedCheck(["160"]);
speedCheck(["3500"]);