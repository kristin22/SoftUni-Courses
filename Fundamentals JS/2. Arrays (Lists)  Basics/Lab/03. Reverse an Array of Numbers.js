function reverseNumArray (n, numArr) {
    let newArr = [];

    for (let i = n - 1; i >= 0; i--) {
        newArr.push(numArr[i]);
    }

    // convert arr to string and output it:
    let str = newArr.join(' ');
    console.log(str);
}

reverseNumArray(3, [10, 20, 30, 40, 50]);
reverseNumArray(4, [-1, 20, 99, 5]);
reverseNumArray(2, [66, 43, 75, 89, 47]);