function sumFirstLast(arrNums) {
    let n = arrNums.length;
    let sum = arrNums[0] + arrNums[n-1];
    console.log(sum);
}

sumFirstLast([20, 30, 40]);
sumFirstLast([10, 17, 22, 33]);
sumFirstLast([11, 58, 69]);