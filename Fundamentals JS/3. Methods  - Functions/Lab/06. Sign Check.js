function singleCheck(a, b, c) {

    const check = function(a, b, c) {
        let n = 0;

        if (a < 0) {
            n++;
        }
        if (b < 0) {
            n++;
        }
        if (c < 0) {
            n++;
        }
    
        if (n === 1 || n === 3) {
            console.log("Negative");
        } else {
            console.log("Positive");
        }
    }

    check(a, b, c);
}

singleCheck(5, 12, -15);
singleCheck(-6, -12, 14);
singleCheck(-1, -2, -3);
singleCheck(-5, 1, 1);