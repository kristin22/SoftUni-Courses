function commision(input) {
    let town = input[0];
    let sold = Number(input[1]);

    let earn = 0;
    if (town == "Sofia") {
        if (sold >= 0 && sold <= 500) {
            earn = 0.05 * sold;
        } else if (sold > 500 && sold <= 1000) {
            earn = 0.07 * sold;
        } else if (sold > 1000 && sold <= 10000) {
            earn = 0.08 * sold;
        } else if (sold > 10000) {
            earn = 0.12 * sold;
        } 
    } else if (town == "Varna") {
        if (sold >= 0 && sold <= 500) {
            earn = 0.045 * sold;
        } else if (sold > 500 && sold <= 1000) {
            earn = 0.075 * sold;
        } else if (sold > 1000 && sold <= 10000) {
            earn = 0.10 * sold;
        } else if (sold > 10000) {
            earn = 0.13 * sold;
        }
    } else if (town == "Plovdiv") {
        if (sold >= 0 && sold <= 500) {
            earn = 0.055 * sold;
        } else if (sold > 500 && sold <= 1000) {
            earn = 0.08 * sold;
        } else if (sold > 1000 && sold <= 10000) {
            earn = 0.12 * sold;
        } else if (sold > 10000) {
            earn = 0.145 * sold;
        }
    } 

    let isTown = town == "Sofia" || town == "Varna" || town == "Plovdiv";
    if (isTown && sold > 0) {
        console.log(earn.toFixed(2));
    } else {
        console.log("error");
    }
}

commision(["Sofia",
    "1500"]);
commision(["Plovdiv",
    "499.99"]);
commision(["Varna",
    "3874.50"]);
commision(["Kaspichan",
    "-50"]);