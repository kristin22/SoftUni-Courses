function series(input) {
    let budget  = Number(input[0]);
    let seriesCount = Number(input[1]);
    
    let seriesPrice = 0;
    let index = 1;
    for (let i = 1; i <= seriesCount; i++) {
        let movieName = input[++index];
        let moviePrice = Number(input[++index]);

        switch (movieName) {
            case "Thrones":     moviePrice *= 0.5;    break;
            case "Lucifer":     moviePrice *= 0.6;    break;
            case "Protector":   moviePrice *= 0.7;    break;
            case "TotalDrama":  moviePrice *= 0.8;    break;
            case "Area":        moviePrice *= 0.9;    break;
        }
        seriesPrice += moviePrice;
    }

    if (budget >= seriesPrice) {
        console.log(`You bought all the series and left with ${(budget - seriesPrice).toFixed(2)} lv.`);
    } else  if (budget < seriesPrice) {
        console.log(`You need ${(seriesPrice - budget).toFixed(2)} lv. more to buy the series!`);
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