function oscars(input) {
    let rent = Number(input[0]);
    let statues = 0.70 * rent;
    let catering = 0.85 * statues;
    let sound = catering / 2;

    let total = rent + statues + catering + sound;
    console.log(total.toFixed(2));
}

oscars(["3500"]);
oscars(["5555"]);