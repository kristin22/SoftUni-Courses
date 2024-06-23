function palindrome(arr) {


    const palindromeCheck = function(number) {
        number = number.toString();

        let ends = Math.ceil(number.length / 2);

        let k = number.length - 1;
        for(let j = 0; j <= ends; j++) {
            f = number[j];
            s = number[k];

            if (f === s) {
                k--;
                if (j === ends) {
                    return 'true';
                }
                continue;
            } else {
                k--;
                return 'false';
                break;
            }
        }
    }

    let n = arr.length;

    for (let i = 0; i < n; i++) {
        const currNum = arr[i];
        console.log(palindromeCheck(currNum));
    }

}

palindrome([123,323,421,121]);
palindrome([32,2,232,1010]);