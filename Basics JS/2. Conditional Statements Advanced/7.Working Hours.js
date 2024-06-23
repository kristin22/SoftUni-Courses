function timeType(input) {
    let h = Number( input[0]);
    let day = input[1];

    let isWorkday = day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday" || day == "Saturday";
    let isWorkHour = h >= 10 && h <= 18;

    if (isWorkday && isWorkHour) {
        console.log("open");
    } else {
        console.log("closed");
    }
}

timeType (["11", "Monday"]);
timeType (["19", "Friday"]);
timeType (["11", "Sunday"]);