function forecast(input) { 
    let degrees = input;

    if (26.00 <= degrees && degrees <= 35.00) {
        console.log("Hot");
    } else if (20.1 <= degrees && degrees <= 25.9) {
        console.log("Warm");
    } else if (15 <= degrees && degrees <= 20) {
        console.log("Mild");
    } else if (12 <= degrees && degrees <= 14.9) {
        console.log("Cool");
    } else if (5 <= degrees && degrees <=11.9) {
        console.log("Cold");
    } else {
        console.log("unknown");
    }
}

forecast(16.5);
forecast(8);
forecast(22.4);
forecast(26);
forecast(0);