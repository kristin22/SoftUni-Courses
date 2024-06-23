function revealWords(words, text) {
    words = words.split(", ");
    // text.split(" ");

    for(let word of words) {
        let stars = "*".repeat(word.length);
        text = text.replace(stars, word);
    }
    console.log(text);
}

revealWords('great',
            'softuni is ***** place for learning new programming languages');

revealWords('great, learning',
            'softuni is ***** place for ******** new programming languages');
