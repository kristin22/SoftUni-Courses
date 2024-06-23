function sumFirstAndLast(arr) {
    arr = arr.map(x => Number(x));
    
    //function sum(a, b)
    
    const sum = function(a, b) {
        return a+b;
    };

    console.log(sum(arr[0], arr[arr.length-1]));
}

sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);