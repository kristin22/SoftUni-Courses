function fitness(input) {
    let n = Number(input[0]);

    let workout = "";
    let back = 0, chest = 0, legs = 0, abs = 0, shake = 0, bar = 0;
    
    for(let index = 1; index <= n; index++) {
        workout = input[index];

        if(workout === "Back") {
            back++;
        } else if(workout === "Chest") {
            chest++;
        } else if(workout === "Legs") {
            legs++;
        } else if(workout === "Abs") {
            abs++;
        } else if(workout === "Protein shake") {
            shake++;
        } else if(workout === "Protein bar") {
            bar++;
        }
    }

    let workoutCount = back + chest + legs + abs;
    let proteinCount = shake + bar;

    console.log(`${back} - back`)
    console.log(`${chest} - chest`)
    console.log(`${legs} - legs`)
    console.log(`${abs} - abs`)
    console.log(`${shake} - protein shake`)
    console.log(`${bar} - protein bar`)
    console.log(`${(workoutCount / n * 100).toFixed(2)}% - work out`)
    console.log(`${(proteinCount / n * 100).toFixed(2)}% - protein`)

}

fitness(["10",
"Back",
"Chest",
"Legs",
"Abs",
"Protein shake",
"Protein bar",
"Protein shake",
"Protein bar",
"Legs",
"Abs"]);