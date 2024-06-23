function barcode(input) {
    let furstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);

    let fThousands = Math.floor(furstNumber / 1000);
    let fHundreds = Math.floor(furstNumber / 100 % 10);
    let fTens = Math.floor(furstNumber / 10 % 10);
    let fUnits = furstNumber % 10;

    
    let sThousands = Math.floor(secondNumber / 1000);;
    let sHundreds = Math.floor(secondNumber / 100 % 10);;
    let sTens = Math.floor(secondNumber / 10 % 10);
    let sUnits = secondNumber % 10;

    let output = "";

    for(let thousands = fThousands; thousands <= sThousands; thousands++) {
        for(let hundreds = fHundreds; hundreds <= sHundreds; hundreds++) {
            for(let tens = fTens; tens <= sTens; tens++) {
                for(let units = fUnits; units <= sUnits; units++) {
                    if(thousands % 2 === 1 && hundreds % 2 === 1 
                        && tens % 2 === 1 && units % 2 === 1) {
                            output += `${thousands}${hundreds}${tens}${units} `;
                    }
                }
            }
        }
    }

    console.log(output.trim());
}

barcode(["2345",
"6789"]);