function petsFood(input) {
    let daysCount = Number(input[0]);
    let totalFood = Number(input[1]);

    let sumAte = 0;
    let dogAte = 0, catAte = 0, totalBiscuits = 0;

    let index = 1;
    let currDogAte = 0;
    let currCatAte = 0;

    for(let currDay = 1; currDay <= daysCount; currDay++) {
        currDogAte = Number(input[++index]);
        currCatAte = Number(input[++index]);

        dogAte += currDogAte;
        catAte += currCatAte;

        if(currDay % 3 === 0) {
            totalBiscuits += (0.1 * (currDogAte + currCatAte));
        }

    }

    sumAte = (dogAte + catAte);

    console.log(`Total eaten biscuits: ${Math.round(totalBiscuits)}gr.`);
    console.log(`${(sumAte / totalFood * 100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${(dogAte / sumAte * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${(catAte / sumAte * 100).toFixed(2)}% eaten from the cat.`);
}

petsFood(["3",
"1000",
"300",
"20",
"100",
"30",
"110",
"40"]);

petsFood(["3",
"500",
"100",
"30",
"110",
"25",
"120",
"35"]);