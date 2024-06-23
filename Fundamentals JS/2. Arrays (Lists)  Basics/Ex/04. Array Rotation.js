function arrayRotate(arr, n) {
    
    for (let i = 1; i <= n; i++) {
        let value = arr.shift();    // shift() takes the first element assigns it to value 
        arr.push(value);            // and it deletes it from arr
    }

    let output = arr.join(" ");
    console.log(output);

}

arrayRotate([51, 47, 32, 61, 21], 2);
arrayRotate([32, 21, 61, 1], 4);
arrayRotate([2, 4, 15, 31], 5);