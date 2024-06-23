function outfit(input) {
    let degrees = Number(input[0]);
    let period = input[1];

    let outfit = "";
    let shoes = "";
    if (degrees >= 10 && degrees <= 18) {
        if (period == "Morning") {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else if (period == "Afternoon" || period == "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        } 
    } else if (degrees > 18 && degrees <= 24) {
        if (period == "Morning" || period == "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (period == "Afternoon") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
    } else if (degrees >= 25) {
        if (period == "Morning") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (period == "Afternoon") {
            outfit = "Swim Suit";
            shoes = "Barefoot";
            
        } else if (period == "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }
    
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}

outfit(["16",
    "Morning"]);
outfit(["22",
    "Afternoon"]);
outfit(["28",
    "Evening"]);