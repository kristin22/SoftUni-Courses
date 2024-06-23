function wedding(input) {
    let maleCnt = Number(input[0]);
    let femaleCnt = Number(input[1]);
    let maxTables = Number(input[2]);

    let text = "";
    let cnt = 0;
    // (1 <-> 1) 

    for(let m = 1; m <= maleCnt; m++) {
        for(let f = 1; f <= femaleCnt; f++) {
            text += `(${m} <-> ${f}) `;
            cnt++;
            if(cnt === maxTables) {
                console.log(text.trim());
                return;
            }
        }
    }
    if (cnt < maxTables) {
        console.log(text.trim());
    }
}

wedding([2, 2, 6]);
wedding([2, 2, 3]);