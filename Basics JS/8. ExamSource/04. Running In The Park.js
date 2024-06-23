function runningInThePark(input) {
    let n = Number(input[0]);

     // let currTime = 0;
    let currDistance = 0;
    let currUnit = "";

    let burned = 0;
    let distanceTotal = 0;
    let timeTotal = 0;

    let index = 0;

    for (let currDay = 1; currDay <= n; currDay++) {
        timeTotal += Number(input[++index]);
        currDistance = Number(input[++index]);
        currUnit = input[++index];

        if (currUnit === "m") {
            distanceTotal += (currDistance / 1000);
        } else if (currUnit === "km") {
            distanceTotal += currDistance  
        }
    }

    burned = timeTotal * 20;    // 20kcal per minute

    console.log(`He ran ${(distanceTotal).toFixed(2)}km for ${timeTotal} minutes and burned ${burned} calories.`);
}

runningInThePark (["2",
"20",
"2000",
"m",
"20",
"2",
"km"]);

runningInThePark(["2",
    "25",
   "2000",
   "m",
   "25",
   "1500",
    "m"]);

runningInThePark(["1",
    "90",
    "3123",
    "m"]);
