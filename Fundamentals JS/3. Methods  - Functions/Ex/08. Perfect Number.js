function perfectNum(a) {
    
    if(a <= 0) {

        return;
    }

    function checkNum(a) {
        let devisors = [];
        let devSum = 0;

        for(let i = 1; i < a; i++) {
            if (a % i === 0) {
                devisors.push(i);
            }
        }

        for(let i = 0; i < devisors.length; i++) {
            devSum += devisors[i];
        }

        if(devSum === a) {
            console.log("We have a perfect number!");
        } else {
            console.log("It's not so perfect.");
        }
    }

    checkNum(a);
}

perfectNum(6);
perfectNum(28);
perfectNum(1236498);