function series(input) {
 let budget = Number(input[0]);
 let n = Number(input[1]);

 let total = 0;
 let index = 2;
 for(let i = 1; i <= n; i++) {
    let movie = input[index];
    let price = Number(input[index + 1]);

    if(movie === "Thrones") {
        price *= 0.50;
    } else if(movie === "Lucifer") {
        price *= 0.60;
    } else if(movie === "Protector") {
        price *= 0.70;
    } else if(movie === "TotalDrama") {
        price *= 0.80;
    } else if(movie === "Area") {
        price *= 0.90;
    }

    total += price;
    index += 2;
 }

 if(budget >= total) {
    console.log(`You bought all the series and left with ${(budget - total).toFixed(2)} lv.`);
 } else {
    console.log(`You need ${(total - budget).toFixed(2)} lv. more to buy the series!`);
 }
}

series(["10",
        "3",
        "Thrones",
        "5",
        "Riverdale",
        "5",
        "Gotham",
        "2"]);

series(["25",
        "6",
        "Teen Wolf",
        "8",
        "Protector",
        "5",
        "TotalDrama",
        "5",
        "Area",
        "4",
        "Thrones",
        "5",
        "Lucifer",
        "9"]);