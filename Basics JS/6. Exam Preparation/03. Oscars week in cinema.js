function oscarsWeekInCinema(input) {
    let movie = input[0];
    let hallType = input[1];
    let ticketsCount = Number(input[2]);

    let ticketPrice = 0;
    let total = 0;
    switch (movie) {
        case "A Star Is Born":
            switch (hallType) {
                case "normal":          ticketPrice = 7.5;  break;
                case "luxury":          ticketPrice = 10.5;  break;
                case "ultra luxury":    ticketPrice = 13.5;  break;
            }           
            break;
        case  "Bohemian Rhapsody":
            switch (hallType) {
                case "normal":          ticketPrice = 7.35;  break;
                case "luxury":          ticketPrice = 9.45;  break;
                case "ultra luxury":    ticketPrice = 12.75;  break;
            } 
            break;  
        case "Green Book":
            switch (hallType) {
                case "normal":          ticketPrice = 8.15;  break;
                case "luxury":          ticketPrice = 10.25;  break;
                case "ultra luxury":    ticketPrice = 13.25;  break;
            } 
            break;            
        case "The Favourite":            
            switch (hallType) {
                case "normal":          ticketPrice = 8.75;  break;
                case "luxury":          ticketPrice = 11.55;  break;
                case "ultra luxury":    ticketPrice = 13.95;  break;
            }   
            break;
    }

    total = ticketsCount * ticketPrice;
    console.log(`${movie} -> ${total.toFixed(2)} lv.`);
}

oscarsWeekInCinema(["A Star Is Born",
"luxury",
"42"]);

oscarsWeekInCinema(["Green Book",
"normal",
"63"]);

oscarsWeekInCinema(["The Favourite",
"ultra luxury",
"34"]);