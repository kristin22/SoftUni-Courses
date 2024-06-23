function emojiDetector(input) {
    let pattern = /(:{2}|\*{2})([A-Z][a-z]{2,})\1/g;
    
    let digits = input[0].match(/\d/g);
    let cool = 1;
    digits.forEach(n => {cool *= n;}); 

    let emojies = input[0].match(pattern);
    let emojiesCnt = emojies.length;
    let coolTotalSum = 0;

    // filter and leave only the cool ones => curSum < cool -> not cool
    emojies = emojies.map(emojie => {
        let currEmojie = emojie.match(/[A-Z][a-z]{2,}/).join("").split("");
        let currSum = 0;

        currEmojie.forEach(char => {
            currSum += char.charCodeAt(0);
        });

        if (currSum > cool) {
            return emojie;
        }
    });

    emojies = emojies.filter(el => { return el !== undefined; });

    console.log(`Cool threshold: ${cool}`);
    console.log(`${emojiesCnt} emojis found in the text. The cool ones are:`);
    emojies.forEach(el => { console.log(el); });
    
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);

emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);

emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);