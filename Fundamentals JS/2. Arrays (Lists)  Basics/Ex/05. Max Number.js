function maxNumber(arr) {
    let tops = [];

    for (let i = 0; i < arr.length - 1; i++) {
        let a = arr[i];
        let cnt = 0;
        for (j = i + 1; j < arr.length; j++) {
            let b = arr[j];
            if (a > b) {
                cnt++;
            } else {
                break;
            }
        }
        if (cnt === arr.length - (i + 1)) {
            tops.push(a);
        }
    }

    tops.push(arr[arr.length - 1]);

    console.log(tops.join(" "));
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);