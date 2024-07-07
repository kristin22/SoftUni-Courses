function rotateArr(arr, rotations) {
    let result = arr;
    for (let r = 0; r < rotations; r++) {
        result.unshift(result.pop());
    }
    return `${result.join(" ")}`;
}

console.log(rotateArr(['1', '2', '3', '4'], 2));
console.log(rotateArr(["Banana", "Orange", "Coconut", "Apple"], 15));