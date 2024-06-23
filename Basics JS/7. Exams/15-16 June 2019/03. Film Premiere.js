function premiere(input) {
    let movie = input[0];
    let pack = input[1];
    let ticketsCnt = Number(input[2]);

    let total = 0;
    let price = 0;
    if(movie === "John Wick") {
        if(pack === "Drink") {
            price = 12;
        } else if(pack === "Popcorn") {
            price = 15;
        } else if(pack === "Menu") {
            price = 19;
        }
    } else if(movie === "Star Wars") {
        if(pack === "Drink") {
            price = 18;
        } else if(pack === "Popcorn") {
            price = 25;
        } else if(pack === "Menu") {
            price = 30;
        }
    } else if(movie === "Jumanji") {
        if(pack === "Drink") {
            price = 9;
        } else if(pack === "Popcorn") {
            price = 11;
        } else if(pack === "Menu") {
            price = 14;
        }
    }

    total = ticketsCnt * price;
    if(movie === "Star Wars" && ticketsCnt >= 4) {
        total *= 0.70;
    } else if(movie === "Jumanji" && ticketsCnt === 2) {
        total *= 0.85;
    }

    console.log(`Your bill is ${total.toFixed(2)} leva.`);
}

premiere(["John Wick",
        "Drink",
        "6"]);

premiere(["Star Wars",
        "Popcorn",
        "4"]);

premiere(["Jumanji",
        "Menu",
        "2"]);