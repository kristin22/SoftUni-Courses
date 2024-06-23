function orbit([width, height, x, y]) {
    let arr = [];
    for(let w = 0; w < width; w++) {
        let currArr = [];
        for (let h = 0; h < height; h++) {
            currArr.push(0);
        }
        arr.push(currArr);
    }
    arr[x][y] = 1;
    console.log(arr);
}

orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);
orbit([3, 3, 2, 2]);