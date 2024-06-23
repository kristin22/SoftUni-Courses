function gym(input) {
    let country = input[0];
    let tool = input[1];

    let dificulty = 0;
    let performance = 0;
    let total = 0;


    switch (country) {
        case "Russia":
            switch (tool) {
                case "ribbon":
                    dificulty = 9.1;
                    performance = 9.4;
                    break;
                case "hoop":
                    dificulty = 9.3;
                    performance = 9.8;
                    break;
                case "rope":
                    dificulty = 9.6;
                    performance = 9;
                    break;
            }
            break;
        case "Bulgaria":
            switch (tool) {
                case "ribbon":
                    dificulty = 9.6;
                    performance = 9.4;
                    break;
                case "hoop":
                    dificulty = 9.55;
                    performance = 9.75;
                    break;
                case "rope":
                    dificulty = 9.5;
                    performance = 9.4;
                    break;
            }
            break;
        case "Italy":
            switch (tool) {
                case "ribbon":
                    dificulty = 9.2;
                    performance = 9.5;
                    break;
                case "hoop":
                    dificulty = 9.45;
                    performance = 9.35;
                    break;
                case "rope":
                    dificulty = 9.7;
                    performance = 9.15;
                    break;
            }
            break;
    }

    total += (dificulty + performance);

    let difference = 20 - total;
    let prcnt = (difference / 20) * 100;

    console.log(`The team of ${country} get ${total.toFixed(3)} on ${tool}.`);
    console.log(`${prcnt.toFixed(2)}%`);

}

gym(["Bulgaria",
    "ribbon"]);