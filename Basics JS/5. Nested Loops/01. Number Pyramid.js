function pyramid(arr) {
    let n = Number(arr[0]);
    let currNum = 1;
    let isBigger = false;   // За да спре 2та цикъла, ако currNum === n

    for (let r = 1; r <= n; r++) {
        let text = "";
        for (let c = 1; c <= r; c++) {
            text += `${currNum} `;

            if (currNum >= n) {
                isBigger = true;    
                break;
            }

            currNum++;
        }
        console.log(text.trim());
        if(isBigger) break;
    }

}

pyramid(["7"]);