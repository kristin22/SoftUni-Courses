function cinema(input) {
    let projection = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);

    let income = 0;
    // if (projection == "Premiere") {
    //     income = 12.00 * (rows * cols);
    // } else   if (projection == "Normal") {
    //     income = 7.50 * (rows * cols);
    // } else   if (projection == "Discount") {
    //     income = 5.00 * (rows * cols);
    // }

    switch(projection) {
        case "Premiere": income = 12.00 * (rows * cols);
            break;
        case "Normal": income = 7.50 * (rows * cols);
            break;
        case "Discount": income = 5.00 * (rows * cols);
            break;
    }    

    console.log(`${income.toFixed(2)} leva`);
}

cinema(["Premiere", "10", "12"]);
cinema(["Normal", "21", "13"]);
cinema(["Discount", "12", "30"]);
