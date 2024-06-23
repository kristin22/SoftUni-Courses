function countOccur(str, word) {
    str = str.split(" ");
    let counter = 0;

for (let w of str) {
    if (w === word) {
        counter++;
    }
}

    console.log(counter);
}

countOccur('This is a word and it also is a sentence', 'is');

countOccur('softuni is great place for learning new programming languages', 'softuni');