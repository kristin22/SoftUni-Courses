function wordOccur(input) {
    let words = {};

    input.map((word) => {
        let count = 0;
        if (!words[word]) {
            words[word] =  0
        }
        
        words[word]++;
    });

    let sorted = Object.entries(words).sort((a, b) => b[1] - a[1]);
    sorted.forEach( x => console.log(`${x[0]} -> ${x[1]} times`));

}


wordOccur(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);

wordOccur(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);


// Object.fromEntries() => transforms a list of key-value pairs into an object


