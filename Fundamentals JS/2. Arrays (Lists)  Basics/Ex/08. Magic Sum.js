function magicSum(arr, num) {
    let n = arr.length;

    for(let i = 0; i < n-1; i++) {
        for(let j = i+1; j < n; j++) {
            if (num === arr[i] + arr[j]) {
                console.log(arr[i], arr[j]);
            }
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8);
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
magicSum([1, 2, 3, 4, 5, 6], 6);



``