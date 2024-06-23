function christmasGifts(input) {
    let command = input[0];
    let index = 0;       

    let adults = 0, kids = 0;
    let sweatersMoney = 0, toysMoney = 0;

    while (command !== "Christmas") {
        let age = Number(command);

        if (age <= 16) {
            kids++;
        } else if (age > 16) {
            adults++;
        }

        command = input[++index];
    }

    sweatersMoney = adults * 15;
    toysMoney = kids * 5;

    console.log(`Number of adults: ${adults}`);
    console.log(`Number of kids: ${kids}`);
    console.log(`Money for toys: ${toysMoney}`);
    console.log(`Money for sweaters: ${sweatersMoney}`);

}

christmasGifts(["16",
"20",
"46",
"12",
"8",
"20",
"49",
"Christmas"]);

christmasGifts(["16",
"16",
"16",
"16",
"16",
"Christmas"]);

christmasGifts(["18",
"20",
"48",
"45",
"56",
"37",
"12",
"14",
"Christmas"]);

