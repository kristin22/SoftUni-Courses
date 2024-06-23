function tom(input) {
    let freeDays = Number(input[0]);

    let workDays = 365 - freeDays;
    let playTime = (workDays * 63) + (freeDays * 127);
    let differene = playTime - 30000;
    
    if (playTime > 30000) {
        console.log("Tom will run away");
        console.log(Math.floor(differene / 60) + " hours and " + Math.floor(differene % 60 )+ " minutes more for play");
    } else {
        console.log("Tom sleeps well");
        console.log(Math.floor(Math.abs(differene / 60)) + " hours and " + Math.floor(Math.abs(differene % 60)) + " minutes less for play");
    }
}