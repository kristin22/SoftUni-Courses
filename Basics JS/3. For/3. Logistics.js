function logistics(input) {
    let n = Number(input[0]);
    let sumT = 0;
    let average = 0;
    let bus = 0, truck = 0, train = 0;

    let curr = 0;
    for(let i = 1; i <= n; i++) {
        curr = Number(input[i])
        sumT += curr;

        if (curr <= 3) {
            bus += curr;
        } else if (curr > 3 && curr <= 11) {
            truck += curr;
        } else if (curr > 11) {
            train += curr;
        }
    }

    average = (bus * 200 + truck * 175 + train * 120) / sumT;

    console.log(average.toFixed(2));
    console.log((bus / sumT * 100).toFixed(2) + "%");
    console.log((truck / sumT * 100).toFixed(2) + "%");
    console.log((train / sumT * 100).toFixed(2) + "%");
}

// logistics([4, 1, 5, 16, 3]);
logistics([5, 2, 10, 20, 1, 7]);