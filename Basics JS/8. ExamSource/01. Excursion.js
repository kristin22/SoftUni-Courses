function excursion(input) {
    let peopleCount = Number(input[0]);
    let nights = Number( input[1]);
    let cardsCount = Number(input[2]);
    let ticketsCount = Number(input[3]);

    let total = nights * 20.00 + cardsCount * 1.60 + ticketsCount * 6.00;
        total *= peopleCount;
        total *= 1.25; 

    console.log(total.toFixed(2));
}

excursion(["20",
"14",
"30",
"6"]);

excursion(["131",
"9",
"33",
"46"]);