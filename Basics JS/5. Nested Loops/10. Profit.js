function profit(input) {
    let cnt1 = Number(input[0]);
    let cnt2 = Number(input[1]);
    let cnt5 = Number(input[2]);
    let sum = Number(input[3]);

    for(let one = 0; one <= cnt1; one++) {
        for(let two = 0; two <= cnt2; two++){
            for(let five = 0; five <= cnt5; five++) {
                if (one * 1 + two * 2 + five * 5 === sum) {
                    console.log(`${one} * 1 lv. + ${two} * 2 lv. + ${five} * 5 lv. = ${sum} lv.`);
                }
            }
        }
    }


}

profit([3, 2, 3, 10]);