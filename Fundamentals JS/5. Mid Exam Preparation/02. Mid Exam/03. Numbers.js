function  numbers(str) {
    let arr = str.split(" ");

    if(arr.length > 1) {

        arr = arr.map(x => Number(x));

        let sum = 0;
        for (let number of arr) {
            sum += number;
        }
    
        let average = sum / arr.length;
        arr = arr.sort(function(a, b){return b-a});
    
        for(let i = arr.length - 1; i >= 0; i--) {
            if(arr[i] <= average) {
                arr.pop();
            }
        } 
    
    }

    let n = arr.length;
    while(n > 5) {
        arr.pop();
        n = arr.length;
    }

    if(arr.length === 1) {
        console.log("No");

    } else {
        console.log(arr.join(" "));
    }

}

numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6');