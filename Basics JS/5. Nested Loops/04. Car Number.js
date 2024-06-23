function carNumber(input) {
    let begins = Number(input[0]);
    let ends = Number(input[1]);
    let text = "";

    for(let fi = begins; fi <= ends; fi++) {
        for(let s = begins; s <= ends; s++) {
            for(let th = begins; th <= ends; th++) {
                for(let fo = begins; fo <= ends; fo++) {
                    if((fi % 2 === 0 && fo % 2 !== 0) || (fi % 2 !== 0 && fo % 2 === 0)) {
                        if(fi > fo && ((s + th) % 2 === 0)) {
                            text += `${fi}${s}${th}${fo} `;
                        }
                    }
                }
            }
        }
    }

    console.log(text);
}

carNumber([2, 3]);