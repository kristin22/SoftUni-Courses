function pinCode(input) {
    let fEnd = Number(input[0]);
    let sEnd = Number(input[1]);
    let thEnd = Number(input[2]);

    for(let f = 1; f <= fEnd; f++) {
        for(let s = 0; s <= sEnd; s++) {
            for(let th = 1; th <= thEnd; th++) {
                if(f % 2 === 0 && th % 2 === 0 && (s === 2 || s === 3 || s === 5 || s === 7)) {
                    console.log(`${f} ${s} ${th}`);
                }
            }
        }
    }
}

pinCode([3, 5, 5]);