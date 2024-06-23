function timePlus15min(input) { 
    let h = Number(input[0] * 60);
    let m = Number(input[1]);
    let time = h + m + 15;

    let hours = Math.floor(time / 60);
    let min = time % 60;

    if (hours > 23) {
        hours = 0;
    }

    if (time % 60 <= 9) {
    console.log(`${hours}:0${time%60}`);
    } else {
    console.log(`${hours}:${time%60}`);
    }

}

timePlus15min(["1", "46"]);
timePlus15min(["0", "01"]);
timePlus15min(["23", "59"]);
timePlus15min(["11", "08"]);
timePlus15min(["12", "49"]);