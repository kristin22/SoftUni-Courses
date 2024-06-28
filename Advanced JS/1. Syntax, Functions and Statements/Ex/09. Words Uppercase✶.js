function wordsUppercase(str) {
    let output = str.split(/[,\s\.\?\!;:'"-]+/g);
    output = output.filter((word) => word.length > 0).join(", ").toUpperCase();

    return output;
}

console.log(wordsUppercase('Hi, how are you?'));
console.log(wordsUppercase('hello'));
console.log(wordsUppercase('Functions in JS can be nested, i.e. hold other functions'));