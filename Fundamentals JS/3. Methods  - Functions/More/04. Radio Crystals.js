function radioCrystals(arr) {
    // Cut  Lap Grind   Etch    X-ray   Transporting and washing

    let targetThickness = arr[0];

    let currChunk = 0;
    for(let i = 1; i < arr.length; i++) {
        currChunk = arr[i];
        let currOperation = "";
        let prevOperation = "";

        let cnt = 0;

        console.log(`Processing chunk ${currChunk} microns`);

        let index = 0;
        while(currChunk > targetThickness) {
            if (currChunk / 4 > targetThickness) {    // Cut check
                currOperation = "Cut";
                if (index === 0) {
                    prevOperation =  currOperation;
                }
                currChunk /= 4;
            } else if (currChunk * 0.8 > targetThickness) {      // Lap check
                currOperation = "Lap";
                if(prevOperation !== currOperation) {
                    cnt = 0;
                }
                if (index === 0) {
                    prevOperation =  currOperation;
                }
                currChunk *= 0.8;
                cnt++;
            } else if (currChunk - 20 > targetThickness) {      // Grind ckeck
                currOperation = "Grind";
                if (index === 0) {
                    prevOperation =  currOperation;
                }
            } else if (currChunk - 2 > targetThickness) {      // Etch check
                currOperation = "Etch";
                if (index === 0) {
                    prevOperation =  currOperation;
                }
            } else if (currChunk+1 > targetThickness) {      // X-ray check
                currOperation = "X-ray";
                if (index === 0) {
                    prevOperation =  currOperation;
                }
            }

            cnt++;

            if (currChunk === targetThickness) {
                console.log(`${currOperation} x${cnt}`);
                console.log(`Finished crystal ${currChunk} microns`);
                break;
            }

            if (currOperation !== prevOperation) {
                console.log(`${prevOperation} x${cnt}`);
                console.log("Transporting and washing");
                currChunk = Math.floor(currChunk);
                cnt = 0;

                if (currChunk === targetThickness) {
                    console.log(`Finished crystal ${currChunk} microns`);
                    break;
                }
            }

            prevOperation = currOperation;
            index++;
        }

    }


}

radioCrystals([1375, 50000]);
radioCrystals([1000, 4000, 8100]);