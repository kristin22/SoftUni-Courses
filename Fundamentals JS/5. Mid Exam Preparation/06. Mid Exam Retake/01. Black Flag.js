function blackFlag(arr) {   // days, daily plunder, expected plunder
    arr = arr.map(x => Number(x));
    let plunder = 0;

    for(let i =  1; i <= arr[0]; i++) {
        plunder += arr[1];

        // every 3rd day
        if (i % 3 === 0) {
            plunder += 0.5 * arr[1];
        }

        // every 5th day
        if (i % 5 === 0) {
            plunder *= 0.7;
        }

    }

    
    if (plunder >= arr[2]) {
        console.log(`Ahoy! ${plunder.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${(plunder / arr[2]).toFixed(2)}% of the plunder.`);
    }
}

blackFlag(["5", "40", "100"]); 
blackFlag(["10", "20", "380"]);