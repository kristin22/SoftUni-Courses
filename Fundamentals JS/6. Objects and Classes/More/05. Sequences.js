function sequences(input) {
    let numArrs = [];

        for(let i = 0; i < input.length; i++) { // new arr loop
            let currArr = input[i].substring(1, input[i].length - 1).split(", ").map((x) => Number(x));
            let matches = 0;
            let flag2 = false;
            
            currArr = currArr.sort((a, b) => b-a);

            if (i === 0) { numArrs.unshift(currArr); }
            else {

                let prevArr = [];
                let flag = false;

                for (let p = 0; p < numArrs.length; p++) {  // stored arrs loop
                    prevArr = [...numArrs[p]].sort((a, b) => b-a);
                    

                    for (let q = 0; q < currArr.length; q++) {  // arr values check loop
                        if(prevArr[q] !== currArr[q] && matches < prevArr.length) {
                            // matches = 0;
                            numArrs.unshift(currArr);
                            flag = true;
                            break;
                        } else {
                            matches++;
                            if (matches === prevArr.length) {
                                flag2 = true;
                            }
                        }
                    }
                    if(flag2) { break; }
                    
                }

                // if(matches === 0) {
                //     numArrs.push(currArr);
                // }
            }

 
        }
    console.log(numArrs);
    
}

sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
           "[10, 1, -17, 0, 2, 13]",
           "[4, -3, 3, -2, 2, -1, 1, 0]"]);

console.log("===========");

sequences(["[7.14, 7.180, 7.339, 80.099]",
           "[7.339, 80.0990, 7.140000, 7.18]",
           "[7.339, 7.180, 7.14, 80.099]"]);