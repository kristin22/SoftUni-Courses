function profit(input) {
    let movie = input[0];
    let days = Number(input[1]);
    let tickets = Number(input[2]);
    let pricePerTicket = Number(input[3]);
    let percent = Number(input[4]);

    let sum = days * (tickets * pricePerTicket);
    sum *= (1 - (percent / 100));

    console.log(`The profit from the movie ${movie} is ${sum.toFixed(2)} lv.`);
}

profit(["The Programmer",
        "20",
        "500",
        "7.50", 
        "7"]);