function evenOddSubstr(arr) {
    let evenSum = 0;
    let oddSum = 0;

    for (let value of arr) {
        if (value % 2 === 0) {
            evenSum += value;
        } else {
            oddSum += value;
        }
    }

    let difference = evenSum - oddSum;
    console.log(difference);
}

evenOddSubstr([1,2,3,4,5,6]);
evenOddSubstr([3,5,7,9]);
evenOddSubstr([2,4,6,8,10]);