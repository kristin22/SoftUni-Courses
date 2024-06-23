function modernHash(text) {
    let arr = text.split(" ");

    for(const word of arr) {
       
        if (word.startsWith("#") && word.length > 1) {

            let isLetter = true;
            for(let i = 1; i < word.length; i++) {
                let ch = word[i];
                if (ch < 97 || ch > 122) {
                    isLetter = false;
                    break;
                }
            }
            if (isLetter) {
                console.log(word.slice(1,word.length));
            }
        }
    }
}

modernHash('Nowadays everyone uses # to tag a #special word in #socialMedia');

modernHash('The symbol # is known #variously in English-speaking #regions as the #number sign');