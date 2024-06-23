function eggs(input) {
    let eggSize = input[0];
    let eggColour = input[1];
    let batchesCount = Number(input[2]);

    let total = 0;
    let pricePerBatch = 0;

    switch (eggSize) {
        case "Large":
            switch (eggColour) {
                case "Red": pricePerBatch = 16;
                    break;
                case "Green": pricePerBatch = 12;
                    break;
                case "Yellow": pricePerBatch = 9;
                    break;
            }
            break;
        case "Medium":
            switch (eggColour) {
                case "Red": pricePerBatch = 13;
                    break;
                case "Green": pricePerBatch = 9;
                    break;
                case "Yellow": pricePerBatch = 7;
                    break;
            }
            break;
        case "Small":
            switch (eggColour) {
                case "Red": pricePerBatch = 9;
                    break;
                case "Green": pricePerBatch = 8;
                    break;
                case "Yellow": pricePerBatch = 5;
                    break;
            }
            break;
    }

    total = batchesCount * pricePerBatch * 0.65;
    console.log(`${total.toFixed(2)} leva.`);
}

eggs(["Large",
"Red",
"7"]);

eggs(["Medium",
"Green",
"5"]);

eggs(["Small",
"Yellow",
"3"]);