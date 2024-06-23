function eggs(input) {
    let colouredCount = Number(input[0]);
    let eggColour = "";
    let red = 0, orange = 0, blue = 0, green = 0;

    for(let index  = 1; index <= colouredCount; index++) {
        eggColour = input[index];
        if(eggColour === "red") {
            red++;
        } else if(eggColour === "orange") {
            orange++;
        } else if(eggColour === "blue") {
            blue++;
        } else if(eggColour === "green") {
            green++;
        }
    }

    let maxEggs = red;
    let maxColour = "red";
    if(orange > maxEggs) {
        maxEggs = orange;
        maxColour = "orange";
    }
    if(blue > maxEggs) {
        maxEggs = blue;
        maxColour = "blue";
    }
    if(green > maxEggs) {
        maxEggs = green;
        maxColour = "green";
    }

    console.log(`Red eggs: ${red}`);
    console.log(`Orange eggs: ${orange}`);
    console.log(`Blue eggs: ${blue}`);
    console.log(`Green eggs: ${green}`);
    console.log(`Max eggs: ${maxEggs} -> ${maxColour}`);

}

eggs(["7",
"orange",
"blue",
"green",
"green",
"blue",
"red",
"green"]);

eggs(["4",
"blue",
"red",
"blue",
"orange"]);