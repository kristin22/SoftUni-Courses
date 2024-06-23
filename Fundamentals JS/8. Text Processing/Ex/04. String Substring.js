function strSubstr(word, text) {

    text = text.split(" ");

    for(let element of text) {
        if (element.toLocaleLowerCase() === word) {
            console.log(word);
            return;
        }
    }

    console.log(word, "not found!");

}

strSubstr('javascript',
          'JavaScript is the best programming language');

strSubstr('python',
          'JavaScript is the best programming language');