function lastKnumbers(n, k) {   
    let numbers = [1, 1];          

    for(let i = 2; i < n; i++) {    // outer cycle for the numbers count
        let starts = i - k;
        if (starts < 0) {
            starts = 0
        }

        let curNum = 0;
        for(let l = starts  ; l <= i - 1; l++) {
            curNum += numbers[l]; 
        } 
        numbers.push(curNum);
    }
    
    
    console.log(numbers.join(" "));

}

lastKnumbers(6, 3);
// lastKnumbers(8, 2);