function plantDiscovery(input) {    // 50/100
    let plants = {};
    let n = Number(input.shift());

    for(let i = 0; i < n; i++) {
        let [plant, rrty] = input.shift().split("<->");

        plants[plant] = {
            rarity: rrty,
            sum: 0,
            rating: 0,
            cnt: 0
        };
    }

    input.forEach(el => {
        el = el.split(": ");
        let cmd = el.shift();
        let pl = el.shift();
        el.pop();

        if (cmd === "Rate") {
            pl = pl.split(" - ");
            let num = Number(pl.pop());
            pl = pl[0];

            plants[pl].sum += num;
            plants[pl].cnt++;
        } else if (cmd ==="Update") {
            pl = pl.split(" - ");
            let num = Number(pl.pop());
            pl = pl[0];
            plants[pl].rarity = num;
        } else if (cmd === "Reset") {
            plants[pl].rating = 0;
            plants[pl].sum = 0;
            plants[pl]["cnt"] = 0;
        }
    });

    console.log("Plants for the exhibition:");
    for(let [key, value] of Object.entries(plants)) {
        // if cnt===0 skip the rating calculation
        if (plants[key].cnt > 0) {
            plants[key].rating = plants[key].sum / plants[key].cnt;
        }
        console.log(`- ${key}; Rarity: ${plants[key].rarity}; Rating: ${(plants[key].rating).toFixed(2)}`);
    }

}

plantDiscovery(["3",
        "Arnoldii<->4",
        "Woodii<->7",
        "Welwitschia<->2",

        "Rate: Woodii - 10",
        "Rate: Welwitschia - 7",
        "Rate: Arnoldii - 3",
        "Rate: Woodii - 5",
        "Update: Woodii - 5",
        "Reset: Arnoldii",
        "Exhibition"]);

// plantDiscovery(["3",
//         "Arnoldii<->4",
//         "Woodii<->7",
//         "Welwitschia<->2",
//         "Rate: Woodii - 10",
//         "Rate: Welwitschia - 7",
//         "Rate: Arnoldii - 3",
//         "Rate: Woodii - 5",
//         "Update: Woodii - 5",
//         "Reset: Arnoldii",
//         "Exhibition"]);