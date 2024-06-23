function grandpaStavri(input) {
    let daysCount = Number(input[0]);

    let index = 0;
    let currRakiaL = 0;
    let currDegree = 0;

    let rakiyaL = 0;
    let degteeSum = 0

    for(let i = 1; i <= daysCount; i++) {
        currRakiaL = Number(input[++index]);
        currDegree = Number(input[++index]);

        rakiyaL += currRakiaL;
        degteeSum += (currRakiaL * currDegree);
    }

    let averageDegrees = degteeSum / rakiyaL;

    console.log(`Liter: ${rakiyaL.toFixed(2)}`);
    console.log(`Degrees: ${averageDegrees.toFixed(2)}`);


    if(averageDegrees < 38) {
        console.log("Not good, you should baking!");
    } else if(averageDegrees >= 38 && averageDegrees <= 42) {
        console.log("Super!")
    } else if(averageDegrees > 42) {
        console.log("Dilution with distilled water!");
    }
}

grandpaStavri(["3",
"100",
"45",
"50",
"55",
"150",
"36"]);

grandpaStavri(["2",
"200",
"43",
"200",
"40"]);