function readHoursPerDay(input) {
    let pageCnt = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysCnt = Number(input[2]);

    let hoursPerDay = (pageCnt / pagesPerHour) / daysCnt;
    console.log(hoursPerDay);
}

readHoursPerDay(["212", "20", "2"]);
readHoursPerDay(["432", "15", "4"]);