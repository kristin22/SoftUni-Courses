function righetPlace(str1, ch, str2) {
    let index = 0;
    
    for (let i = 0; i <= str1.length; i++) {   
        let currChar = str1[i];
        if (currChar === '_') {
            index = i;
            str1 = str1.replace('_', ch);
            break;
        }
    }


    // let comrareIt = str1.localeCompare(str2);

    if (str1 === str2) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}

righetPlace('Str_ng', 'I', 'Strong');
righetPlace('Str_ng', 'i', 'String');