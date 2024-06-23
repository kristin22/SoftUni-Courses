function strValue(arr) {
    let [text, command] = arr;
    let total = 0;

    if (command === "UPPERCASE") {  // sum of all uppercase letters 
        text = text.split("")
                 .filter( x => { return x.charCodeAt() >= 65 && x.charCodeAt() <= 90 })
    } else if (command === "LOWERCASE") {   // sum of all lowercase letters
        text = text.split("")
                 .filter( x => {return x.charCodeAt() >= 97 && x.charCodeAt() <= 122})
    }

    text.forEach(letter => { total += letter.charCodeAt(); });
    console.log(`The total sum is: ${total}`);
}

strValue(['HelloFromMyAwesomePROGRAM', 'LOWERCASE']);

strValue(['AC/DC', 'UPPERCASE']);