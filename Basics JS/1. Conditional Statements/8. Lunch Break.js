function lunchBreak(input) { 
    let movie = input[0];
    let movieTime = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = breakTime / 8;
    let restTime = breakTime / 4;
    let leftFreeTime = breakTime - (lunchTime + restTime);

    let difference = Math.abs(leftFreeTime - movieTime);
    if(leftFreeTime >= movieTime) {
        console.log(`You have enough time to watch ${movie} and left with ${Math.ceil(difference)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${movie}, you need ${Math.ceil(difference)} more minutes.`);
    }

}

lunchBreak(["Game of Thrones", "60", "96"]);
lunchBreak(["Teen Wolf", "48", "60"]);