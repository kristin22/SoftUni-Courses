function carePuppy(input) {
    let doggFood = Number(input[0]) * 1000;
    
    let index = 0;
    let command = "";
    // let currFood = 0;
    let neededFood = 0;

    while(true) {
        command = input[++index];
        if(command === "Adopted") {
            if(neededFood <= doggFood) {
                console.log(`Food is enough! Leftovers: ${doggFood - neededFood} grams.`);
            } else {
                console.log(`Food is not enough. You need ${neededFood - doggFood} grams more.`);
            }
            break;
        }
        neededFood += Number(command);
    }
    
}

carePuppy(["4",
"130",
"345",
"400",
"180",
"230",
"120",
"Adopted"]);

carePuppy(["3",
"1000",
"1000",
"1000",
"Adopted"]);
