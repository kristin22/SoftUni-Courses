function football(input) {
    let n = Number(input[0]);
    let h = 0, f = 0, o = 0, oth = 0;
    let hearthstone = 0, fornite = 0, overwatch = 0, other = 0;

    for(let index = 1; index <= n; index++) {
        let command = input[index];
        if(command === "Hearthstone") {
            h++;
        } else if(command === "Fornite") {
            f++;
        } else if(command === "Overwatch") {
            o++;
        } else {
            oth++;
        }
    }

    hearthstone = h / n * 100;
    fornite = f / n * 100;
    overwatch = o / n * 100;
    other = oth / n * 100;



    console.log(`Hearthstone - ${hearthstone.toFixed(2)}%`)
	console.log(`Fornite - ${fornite.toFixed(2)}%`)
	console.log(`Overwatch - ${overwatch.toFixed(2)}%`)
	console.log(`Others - ${other.toFixed(2)}%`)

}

football(["4",
"Hearthstone",
"Fornite",
"Overwatch",
"Counter-Strike"]);

football(["3",
"Hearthstone",
"Diablo 2",
"Star Craft 2"]);