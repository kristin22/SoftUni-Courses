function week(input) {
    let dayNum = Number(input[0]);
    if (dayNum === 1) {
        console.log("Monday");
    } else if (dayNum === 2) {
        console.log("Tuesday");
    } else if (dayNum === 3) {
        console.log("Wednesday");
    } else if (dayNum === 4) {
        console.log("Thursday");
    } else if (dayNum === 5) {
        console.log("Friday");
    } else if (dayNum === 6) {
        console.log("Saturday");
    } else if (dayNum == 7) {
        console.log("Sunday");
    } else {
        console.log("Error");
    }
}

week(["1"]);
week(["2"]);
week(["3"]);
week(["4"]);
week(["5"]);
week(["6"]);
week(["7"]);
week(["-1"]);
