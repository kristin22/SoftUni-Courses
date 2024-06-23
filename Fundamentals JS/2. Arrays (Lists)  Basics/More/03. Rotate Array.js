function rotateArr(arr) {
    let rotations = Number(arr.pop(arr.length - 1));


    for (let i = 0; i < rotations; i++) {
        arr.unshift(arr[arr.length - 1]);
        arr.pop();
    }

    console.log(arr.join(" "));
}

rotateArr(['1', '2', '3', '4', '2']);
rotateArr(['Banana', 'Orange', 'Coconut', 'Apple', '15']);