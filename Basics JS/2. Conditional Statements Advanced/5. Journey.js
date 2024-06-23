function excursion(input) { 
    let budget = (input[0]);
    let season = input[1];
    let word = "";

    if (budget <= 100) {
        destination = "Bulgaria";
        switch (season) {
            case "summer": budget *= 0.30; 
            word = "Camp";
                break;
            case "winter": budget *= 0.70; 
            word = "Hotel"
                break;
    
        }
        
    } else if (budget <= 1000) {
        destination = "Balkans";
        switch (season) {
            case "summer": budget *= 0.40; 
            word = "Camp"
                break;
            case "winter": budget *= 0.80; 
            word = "Hotel";
                break;
        }
    } else if (budget > 1000) {
        destination = "Europe";
        budget *= 0.90;
        word = "Hotel";
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${word} - ${budget.toFixed(2)}`);    
}

excursion(["50", "summer"]);
excursion(["75", "winter"]);
excursion(["312", "summer"]);
excursion(["678.53", "winter"]);
excursion(["1500", "summer"]);