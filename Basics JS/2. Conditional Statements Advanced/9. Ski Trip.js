function trip(input) { 
    let days = Number(input[0]);
    let room = input[1];
    let feedback = input[2];
    let nights = days - 1;

    let bill = 0;
    switch (room) {
        case "room for one person":
            bill = nights * 18.00;
            break;
        case "apartment":
            bill = nights * 25.00;
            if (nights < 10) {
                bill *= 0.70;
            } else if (nights <= 15) {
                bill *= 0.65;
            } else if (nights > 15) {
               bill *= 0.50; 
            }
            break;
        case "president apartment":
            bill = nights * 35.00;
            if (nights < 10) {
                bill *= 0.90;
            } else if (nights <= 15) {
                bill *= 0.85;
            } else if (nights > 15) {
               bill *= 0.80; 
            }
            break;
    }

    if (feedback === "positive") {
        bill *= 1.25;
    } else if (feedback === "negative") {
        bill *= 0.90;
    }

    console.log(bill.toFixed(2));
}

trip(["14", "apartment", "positive"]);
trip(["30", "president apartment", "negative"]);
trip(["12", "room for one person", "positive"]);
trip(["2", "apartment", "positive"]);