function reverseInPlace(arr) {
    let n = arr.length;
    let m = n / 2;
    
    for (let i = 0; i < m; i++) {
        let x = arr[i];
        arr[i] =  arr[n - (i+1)];
        arr[n - (i+1)] = x;
    }
    
    console.log(arr.join(" "));
}

reverseInPlace(['a', 'b', 'c', 'd', 'e']);
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
reverseInPlace(['33', '123', '0', 'dd']);