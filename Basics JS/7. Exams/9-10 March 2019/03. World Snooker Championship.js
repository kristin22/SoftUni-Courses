function snooker(input) {   // 70/100
    let stage = input[0];
    let ticketType = input[1];
    let ticketCount = Number(input[2]);
    let pictureYN = input[3];

    let pricePerTicket = 0;
    let total = 0;

    // “Quarter final ”, “Semi final” или “Final”
    // “Standard”, “Premium” или “VIP”
    // 'Y' (да) или 'N' (не)

    if(stage === "Quarter final") {
        if(ticketType === "Standard") {
            pricePerTicket = 55.50;
        } else if(ticketType === "Premium") {
            pricePerTicket = 105.20;
        } else if(ticketType === "VIP") {
            pricePerTicket = 118.90;
        }
    } else if(stage === "Semi final") {
        if(ticketType === "Standard") {
            pricePerTicket = 75.88;
        } else if(ticketType === "Premium") {
            pricePerTicket = 125.22;
        } else if(ticketType === "VIP") {
            pricePerTicket = 300.40;
        }
    } else if(stage === "Final") {
        if(ticketType === "Standard") {
            pricePerTicket = 110.10;
        } else if(ticketType === "Premium") {
            pricePerTicket = 160.66;
        } else if(ticketType === "VIP") {
            pricePerTicket = 400.00;
        }
    }

    total += ticketCount * pricePerTicket;
    


    if(total > 4000) {
        total *= 0.75;
    } else  {
        if(total > 2500) {
            total *= 0.90;
        }
        if(pictureYN === 'Y' && total <= 4000) {
            total += (ticketCount * 40.00);
        }
    }
 
    console.log(total.toFixed(2));

}

snooker(["Final",
        "Premium",
        "25",
        "Y"]);

snooker(["Semi final",
        "VIP",
        "9",
        "Y"]);

snooker(["Quarter final",
        "Standard",
        "11",
        "N"]);