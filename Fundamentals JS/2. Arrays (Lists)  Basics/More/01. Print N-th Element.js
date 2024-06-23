function printNth(arr) {
    let step = Number(arr[arr.length - 1]);
    arr.pop();

    let str = "";
    for(let i = 0; i < arr.length; i += step) {
        str += arr[i] + ' ';
    }

    console.log(str.trim());
}

printNth(['5', '20', '31', '4', '20', '2']);
printNth(['dsa', 'asd', 'test', 'test', '2']);
printNth(['1', '2', '3', '4', '5', '6']);