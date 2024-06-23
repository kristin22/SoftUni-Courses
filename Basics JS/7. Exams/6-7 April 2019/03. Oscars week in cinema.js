function oscars(input) {
    let movie = input[0];
    let hall = input[1];
    let n = Number(input[2]);

    let ticketPrice = 0;
    let total = 0;

    if(movie === "A Star Is Born") {
        if(hall === "normal"  ) {
            ticketPrice = 7.5;
        } else if(hall === "luxury") {
            ticketPrice = 10.5;
        } else if(hall === "ultra luxury") {
            ticketPrice = 13.5;
        }
    } else if(movie === "Bohemian Rhapsody") {
        if(hall === "normal"  ) {
            ticketPrice = 7.35;
        } else if(hall === "luxury") {
            ticketPrice = 9.45;
        } else if(hall === "ultra luxury") {
            ticketPrice = 12.75;
        }
    } else if(movie === "Green Book") {
        if(hall === "normal"  ) {
            ticketPrice = 8.15;
        } else if(hall === "luxury") {
            ticketPrice = 10.25;
        } else if(hall === "ultra luxury") {
            ticketPrice = 13.25;
        }
    } else if(movie === "The Favourite") {
        if(hall === "normal"  ) {
            ticketPrice = 8.75;
        } else if(hall === "luxury") {
            ticketPrice = 11.55;
        } else if(hall === "ultra luxury") {
            ticketPrice = 13.95; 
        }
    }

    total = n * ticketPrice;
    console.log(`${movie} -> ${total.toFixed(2)} lv.`);
}

oscars(["A Star Is Born",
        "luxury",
        "42"]);

