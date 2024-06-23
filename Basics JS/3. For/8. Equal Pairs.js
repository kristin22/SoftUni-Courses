function equalPairs(input) {  
    let n = Number(input[0]);
    let ab = 0;
    let prevAB = 0;
    let diff = 0, maxDiff = 0;

    for(let index = 1; index <= 2 * n; index += 2) {
        prevAB = ab;
        let a = Number(input[index]);
        let b = Number(input[index + 1]);
        ab = a + b;
        diff = Math.abs(a - b);

        if (index !== 1) {
			diff = Math.abs(ab - prevAB);
				if (diff !== 0 && diff > maxDiff) {
					maxDiff = diff;
				}
		}
    }

    if (prevAB === ab || n === 1) {
        console.log(`Yes, value=${ab}`);
    } else {
        console.log(`No, maxdiff=${maxDiff}`);
    }

}

equalPairs([3,
            1,
            2,
            0,
            3,
            4,
            -1]);