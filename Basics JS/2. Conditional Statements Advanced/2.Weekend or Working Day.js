function dayType(input) {

    let day = input[0];
    let isWorkday = day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday";
    let isWeekend = day == "Saturday" || day == "Sunday";
    
    if (isWorkday) {
        console.log("Working day");
    } else if (isWeekend) {
        console.log("Weekend");
    } else {
        console.log("Error");
    }
   
}

dayType(["Monday"]);
dayType(["Sunday"]);
dayType(["April"]);