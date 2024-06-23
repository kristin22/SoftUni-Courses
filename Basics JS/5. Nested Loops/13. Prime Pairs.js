function primePairs(input) {    // FIND THE ERROR
    let abBegins = Number(input[0]);
    let cdBegin = Number(input[1]);
    let abEndBeginDiff = Number(input[2]);
    let cdEndBeginDiff = Number(input[3]);

    let abEnds = abBegins + abEndBeginDiff;
    let cdEnds = cdBegin + cdEndBeginDiff;


    for(let ab = abBegins; ab <= abEnds; ab++) {
        for(let cd = cdBegin; cd <= cdEnds; cd++) {
            let abCnt = 0, cdCnt = 0;

            for(let x = 1; x <= ab; x++) {
                if(ab % x === 0) {
                    abCnt++;
                }
            }
            for(let y = 1; y <= cd; y++) {

                if(cd % y === 0) {
                    cdCnt++;
                }
            }

            if(abCnt === 2 && cdCnt === 2) {
                console.log(`${ab}${cd}`);
            }
        }
    }
}

primePairs([10, 20, 5, 5]);