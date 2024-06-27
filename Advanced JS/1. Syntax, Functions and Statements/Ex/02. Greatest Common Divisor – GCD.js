function greatestCommonDivisor(num1, num2) {
    let maxDevisor = 1;
    
    let n = 0;
    (num1 < num2) ? n = num1 : n = num2;
    
    for(let currDevisor = 2; currDevisor <= n; currDevisor++) {
        if (num1 % currDevisor === 0  && num2 % currDevisor === 0) {
            maxDevisor = currDevisor;
        }
    }

    return  maxDevisor;
}

console.log(greatestCommonDivisor(15, 5))
console.log(greatestCommonDivisor(2154, 458))