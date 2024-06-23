function oscars(input) {
    let actor = input[0];
    let points = Number(input[1]);
    let n = Number(input[2]);

    let index = 3;
    for(let i = 1; i <= n; i++) {
        let judge = input[index];
        let currPoints = Number(input[index + 1]);

        let length = judge.length;
        points += (length * currPoints) / 2;
        if(points > 1250.5) {
            break;
        }
        index += 2;
    }

    if(points > 1250.5) {
        console.log(`Congratulations, ${actor} got a nominee for leading role with ${points.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${actor} you need ${(1250.5 - points).toFixed(1)} more!`);
    }
}

oscars(["Zahari Baharov",
        "205",
        "4",
        "Johnny Depp",
        "45",
        "Will Smith",
        "29",
        "Jet Lee",
        "10",
        "Matthew Mcconaughey",
        "39"]);

oscars(["Sandra Bullock",
        "340",
        "5",
        "Robert De Niro",
        "50",
        "Julia Roberts",
        "40.5",
        "Daniel Day-Lewis",
        "39.4",
        "Nicolas Cage",
        "29.9",
        "Stoyanka Mutafova",
        "33"]);