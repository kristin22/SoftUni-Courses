function luckyNum(input) {
    let num = Number(input[0]);
    let text = "";

    for(let fi = 1; fi <= 9; fi++) {
        for(let s = 1; s <= 9; s++) {
            for(let th = 1; th <= 9; th++) {
                for(let fo = 1; fo <= 9; fo++) {
                    if((num % (fi + s) === 0) && ((fi + s) === (th + fo))) {
                        text +=  `${fi}${s}${th}${fo} `;
                    }
                }
            }
        }   
    }

    console.log(text);
}

luckyNum([3]);