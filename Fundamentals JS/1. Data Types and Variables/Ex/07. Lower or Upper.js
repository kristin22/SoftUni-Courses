function lowerOrUpperIt(letter) {
    let letterNum = letter.charCodeAt(0);
    
    if (letterNum >= 65 && letterNum <= 90) {
        console.log('upper-case');
    } else if (letterNum >= 97 && letterNum <= 122) {
        console.log('lower-case');
    }

}

lowerOrUpperIt('L');
lowerOrUpperIt('f');