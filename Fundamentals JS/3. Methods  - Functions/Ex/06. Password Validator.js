function passValidator(password) { 

    const passCheck = (password) => {
        let n = password.length;
        let cnt = 0;

        // check 1
        if(n < 6 || n > 10) {
            console.log("Password must be between 6 and 10 characters");
        } else {
            cnt++;
        }

        // check 2 & check 3

        let digitsCnt = 0;

        for(let i = 0; i < n; i++) {
            let lCode = password[i].charCodeAt();

            // for check 3
            if (lCode >= 48 && lCode <= 57) {
                digitsCnt++;
            }


            let isAllowed = (lCode >= 48 && lCode <= 57) ||
                            (lCode >= 65 && lCode <= 90) ||
                            (lCode >= 97 && lCode <= 122);

            if (!isAllowed) {
                console.log("Password must consist only of letters and digits");
                console.log("Password must have at least 2 digits");
                return;
            }

            if (i === n-1) {
                cnt++;
            }
        }

        // for check 3
        if (digitsCnt < 2) {
            console.log("Password must have at least 2 digits");
        } else {
            cnt++;
        }

        // check 4
        if(cnt === 3) {
            console.log("Password is valid");
        }

    }

    passCheck(password);

}

passValidator('logIn');
passValidator('MyPass123');
passValidator('Pa$s$s');

/*

function solve(password) {
    
    if (lengthValidator(password) && isLetterDigit(password) && numCountMinimum(password)) {
        console.log('Password is valid');
    } else {
        if (!lengthValidator(password)) {
            console.log('Password must be between 6 and 10 characters')
        }
        if (!isLetterDigit(password)) {
            console.log('Password must consist only of letters and digits');
        }
        if (!numCountMinimum(password)) {
            console.log(`Password must have at least 2 digits`);
        }
    }

    function isDigit(num) {
        return num >= 48 && num <= 57;
    }

    function numCountMinimum(password) {
        let count = 0;
        // let isDigit = (x) => x >= 48 && x <= 57;

        for (let char of password) {
            let charValue = char.charCodeAt(0);
            if (isDigit(charValue)) {
                count++;
            }
        }

        return count >= 2;
    }

    function lengthValidator(password) {
        return password.length >= 6 && password.length <= 10;
    }

    function isLetterDigit(password) {
        let isLowerLetter = (x) => x >= 87 && x <= 122;
        let isUpperLetter = (x) => x >= 65 && x <= 90;

        for (let char of password) {
            let charValue = char.charCodeAt(0);
            if (!isDigit(charValue) && !isLowerLetter(charValue) && !isUpperLetter(charValue)) {
                return false;
            }
        }

        return true;
    }
}


*/