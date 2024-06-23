function song(input) {
    let m = Number(input[0]);
    let text = "";
    let cnt = 0;
    let password = "";

    for(let a = 1; a <= 9; a++) {
        for(let b = 1; b <= 9; b++) {
            for(let c = 1; c <= 9; c++) {
                for(let d = 1; d <= 9; d++) {
                    if (a * b + c * d === m) {
                        if(a < b && c > d) {
                            cnt++;
                            text += `${a}${b}${c}${d} `;
                            if (cnt === 4) {
                                password = `${a}${b}${c}${d}`;
                            }
                        }
                    }
                }
            }
        }
    }

    if (cnt > 0) {
        console.log(text);
        if (cnt >= 4) {
            console.log(`Password: ${password}`);
        } else {
            console.log("No!");
        }
    } else {
        console.log("No!");
    }

}

song([11]);
song([139]);