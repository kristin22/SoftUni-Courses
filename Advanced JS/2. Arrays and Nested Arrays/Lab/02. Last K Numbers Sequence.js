function lastKNums(n, k) {
    let arr = [1];
    
    for(let i = 0; i < n - 1; i++) {
        let curr = 0;
        let start = i - k + 1;
        if (start < 0) { start = 0; };
        for(let j = start; j <= i; j++) {
            curr += arr[j];
        }
        arr.push(curr);
    }

    return arr;
}

console.log(lastKNums(6, 3));
console.log(lastKNums(8, 2)); 