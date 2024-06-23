function onTimeForExam(input) {
    let hourExam = Number(input[0]);
    let minuteExam = Number(input[1]);
    let hourCame = Number(input[2]);
    let minuteCame = Number(input[3]);

    let examInMinutes = hourExam * 60 + minuteExam
    let cameInMinutes = hourCame * 60 + minuteCame
    let difference = Math.abs(examInMinutes - cameInMinutes);

    // if (hourCame >= hourExam && minuteCame > minuteExam) {
    //     console.log("Late");
    // }

    if (cameInMinutes > examInMinutes) {
        console.log("Late");

        if (difference < 60) {
            console.log(`${difference} minutes after the start`);
        } else {
            if (difference % 60 <= 9) {
                console.log(`${Math.floor(difference / 60)}:0${(difference % 60)} hours after the start`);
            } else {
                console.log(`${Math.floor(difference / 60)}:${(difference % 60)} hours after the start`);
            }
        }

    } else {
        if (cameInMinutes <= examInMinutes && difference <= 30) {
            console.log("On time");
            if(difference != 0) {
                console.log(`${difference} minutes before the start`);
            }
        } else if (cameInMinutes < examInMinutes && difference > 30) {
            console.log("Early");

            if (difference < 60) {
                console.log(`${difference} minutes before the start`);
            } else {
                if (difference % 60 <= 9) {
                    console.log(`${Math.floor(difference / 60)}:0${(difference % 60)} hours before the start`);
                } else {
                    console.log(`${Math.floor(difference / 60)}:${(difference % 60)} hours before the start`);
                }
            }
        }
    }

}

onTimeForExam(["9", "30", "9", "50"]);
onTimeForExam(["9", "00", "8", "30"]);
onTimeForExam(["16",
    "00",
    "15",
    "00"]);

onTimeForExam(["9",
    "00",
    "10",
    "30"]);

onTimeForExam(["14",
    "00",
    "13",
    "55"])

onTimeForExam(["11",
    "30",
    "8",
    "12"]);

onTimeForExam(["10",
    "00",
    "10",
    "00"]);

onTimeForExam(["11",
    "30",
    "10",
    "55"]);

onTimeForExam(["11",
    "30",
    "12",
    "29"]);