function evenSum(arr) { // map() iterates over the array
    arr = arr.map(a => Number(a));
    // We give a function to map (arrow function in this case) and it returns the new array with the changes we wanted.
    
    let sum = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] % 2 === 0) {
    //         sum += arr[i];
    //     }
    // }

    // using for...of
    for (let value of arr) {
        if (value % 2 === 0) {
            sum += value;
        }
    }

    console.log(sum);
}

evenSum(['1','2','3','4','5','6']);
evenSum(['3','5','7','9']);
evenSum(['2','4','6','8','10']);