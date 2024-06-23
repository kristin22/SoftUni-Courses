function bake(input) {
    let n = Number(input[0]);

    let currSugar = 0;
    let currFlour = 0;

    let sugarSum = 0;
    let flourSum = 0;

    let maxSugar = 0;
    let maxFlour = 0;

    let index = 0;
    for(let i = 1; i <= n; i++) {
        currSugar = Number(input[++index]);
        currFlour = Number(input[++index]);

        sugarSum += currSugar;
        flourSum += currFlour;

        if(currSugar > maxSugar) {
            maxSugar = currSugar;
        }
        if(currFlour > maxFlour) {
            maxFlour = currFlour;
        }

    }

    console.log(`Sugar: ${Math.ceil(sugarSum / 950)}`);
    console.log(`Flour: ${Math.ceil(flourSum / 750)}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);

}

bake(["3",
"400",
"350",
"250",
"300",
"450",
"380"]);

// bake(["4",
// "500",
// "350",
// "560",
// "430",
// "600",
// "345",
// "578",
// "543"]);