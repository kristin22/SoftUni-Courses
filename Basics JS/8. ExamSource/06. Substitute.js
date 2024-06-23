function substitute(input) {
    let k = Number(input[0]);   // 0-8
    let l = Number(input[1]);   // 9-0  
    let m = Number(input[2]);   // 0-8
    let n = Number(input[3]);   // 9-0

    // първите 6 смени
    let count = 0;

    for(let first = k; first <= 8; first++) {
        for(let second = 9; second >= l; second--) {
            for(let third = m; third <= 8; third++) {
                for(let fourth = 9; fourth >= n ; fourth--) {
                    if( first % 2 === 0 && second % 2 === 1 &&
                        third % 2 === 0 && fourth % 2 === 1) {

                            let num1 = first * 10 + second;
                            let num2 = third * 10 + fourth;
                            if(num1 !== num2) {  // ако номерата не съвпадат
                                count++;
                                console.log(`${first}${second} - ${third}${fourth}`);
                                if(count === 6) {
                                    return;
                                }
                            } else {
                                console.log("Cannot change the same player.");
                            }
                        }
                }
            }
        }
    }
}

substitute(["7",
"6",
"8",
"5"]);

substitute(["6",
"7",
"5",
"6"]);