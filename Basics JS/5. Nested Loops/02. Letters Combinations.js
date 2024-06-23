function letterCombo(input) {
    let beginLetter = input[0];
    let endLetter = input[1];
    let missLetter = input[2];

    let begins = beginLetter.charCodeAt(0);
    let ends = endLetter.charCodeAt(0);
    let miss = missLetter.charCodeAt(0);

    let text = "";
    let cnt = 0;

    for(let i = begins; i <= ends; i++) {
        for(let j = begins; j <= ends; j++) {
            for(let k = begins; k <= ends; k++) {
                if(i !== miss && j !== miss && k !== miss) {
                    text += `${String.fromCharCode(i)}${String.fromCharCode(j)}${String.fromCharCode(k)} `;
                    cnt++;
                }
            }
        }
    }

    console.log(text + cnt);
}

letterCombo(["a", "c", "b"]);

/* 
    var str = "A";
    var n = str.charCodeAt(0);
    console.log(n);   // 65

*/