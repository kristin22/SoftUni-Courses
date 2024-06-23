function passGenerator(input) {
    let n = Number(input[0]);
    let l = Number(input[1]);
    let text = "";

    // 11aa2 11ab2 11ac2 11ad2 11ba2 ...

    for(let one = 1; one <= n; one++) {
        for(let two = 1; two <= n; two++) {
            for(let three = 97; three < 97+ l; three++) {     // 97 - 122 ==> a - z
                for(let four = 97; four < 97 + l; four++) {
                    for(let five = 1; five <= n; five++) {
                        if (five > one && five > two) {
                            text += `${one}${two}${String.fromCharCode(three)}${String.fromCharCode(four)}${five} `
                        }
                    }
                }
            }
        }
    }

    
      

    console.log(text);
}

passGenerator([2, 4]);