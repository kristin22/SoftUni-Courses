function plusMinus(arr) {
    function arrSum(input) {
        let sum = 0;
        for (let i = 0; i < input.length; i++) {
            sum += input[i];
        }
        return sum;
    }

    let sum1 = arrSum(arr);

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 === 0) {
            arr[i] += i;
        } else {
            arr[i] -= i;
        }
    }

    let sum2 = arrSum(arr);
    console.log(`[ ${arr.join(", ")} ]`);
    console.log(sum1);
    console.log(sum2);
}


plusMinus([5, 15, 23, 56, 35]);
plusMinus([-5, 11, 3, 0, 2]);