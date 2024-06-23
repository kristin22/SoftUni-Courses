function football(input) {
    let capacity = Number(input[0]);
    let fens = Number(input[1]);
    let sector = "";
    let a = 0, b = 0, v = 0, g = 0, sum = 0;

    for(let index = 2; index < 2 + fens; index++) {
        sector = input[index];
        switch (sector) {
            case "A":
                a++;
                break;
            case "B":
                b++;
                break;
            case "V":
                v++;
                break;
            case "G":
                g++;
                break;
        }
    }
    sum = a + b + v + g;

    console.log(`${(a / sum * 100).toFixed(2)}%`);
    console.log(`${(b / sum * 100).toFixed(2)}%`);
    console.log(`${(v / sum * 100).toFixed(2)}%`);
    console.log(`${(g / sum * 100).toFixed(2)}%`);
    console.log(`${(sum / capacity * 100).toFixed(2)}%`);
}

football([76,
        10,
        "A",
        "V",
        "V",
        "V",
        "G",
        "B",
        "A",
        "V",
        "B",
        "B"]);