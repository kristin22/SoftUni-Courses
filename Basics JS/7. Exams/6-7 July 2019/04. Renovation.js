function renovation(input) { // 6-7 july 2019
    let h = Number(input[0]);
    let w = Number(input[1]);
    let area = parseInt(Math.ceil(h * w * 4));
    let prcntNoCol = Number(input[2]);
    
    area -= ((prcntNoCol / 100) * area);

    let index = 3;
    let command = input[index];

    while(command !== "Tired!") {
        let num = Number(command);
        area -= num;
        if(area <= 0) {
            break;
        }


        index++;
        command = input[index];
    }

    if(command === "Tired!") {
        console.log(`${area} quadratic m left.`);
    } else if(area > 0) {
        console.log(`All walls are painted! Great job, Pesho!`);
    } else {
        console.log(`All walls are painted and you have ${Math.abs(area)} l paint left!`);
    }
}

renovation(["3",
            "5",
            "10",
            "2",
            "3",
            "4",
            "Tired!"]);

renovation(["2",
"3",
"25",
"6",
"7",
"8"]);

/*

function solve(input) {
 
    let wallHeight = Number(input.shift());
    let wallWidth = Number(input.shift());
 
    let wallSizeInSqM = wallHeight * wallWidth;
 
    let uncoveredPartsPercent = (Number(input.shift())) / 100;
 
    let areaToCover = wallSizeInSqM * 4;
    let totalAreaToCover = Math.ceil(areaToCover - (areaToCover * uncoveredPartsPercent));
 
    let totalAreaCovered = 0;
 
    let paintQuantityInLiters = input.shift();
 
    while (paintQuantityInLiters != "Tired!") {
        paintQuantityInLiters = Number(paintQuantityInLiters);
 
        totalAreaCovered += paintQuantityInLiters;
 
        if (totalAreaCovered >= totalAreaToCover) {
            paintQuantityInLiters = Number(input.shift());
            if (paintQuantityInLiters > 0) {
                totalAreaCovered += paintQuantityInLiters;
            }
            break;
        }
 
        paintQuantityInLiters = input.shift();
    }
 
    let difference = Math.abs(totalAreaCovered - totalAreaToCover);
 
    if (paintQuantityInLiters == "Tired!") {
        console.log(`${difference} quadratic m left.`);
    } else if (totalAreaCovered > totalAreaToCover) {
        console.log(`All walls are painted and you have ${difference} l paint left!`);
    } else if (totalAreaCovered == totalAreaToCover) {
        console.log(`All walls are painted! Great job, Pesho!`);
    }
}
 
// solve([ '3', '5', '10', '2', '3', '4', 'Tired!' ]);
solve([ '2', '3', '25', '6', '7', '8', '8' ]);

*/