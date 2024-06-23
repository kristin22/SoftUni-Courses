function printChars(input) {
    let word = input[0];

    for (let index = 0; index < word.length; index++) {
        console.log(word[index]);   // word[i] е същото като word.charAt(index)
    } 
}

printChars(["Hello!"]);