function postOffice(input) {
    const [lettersStr, infoStr, wordsStr] = input.shift().split("|");

    // part one: capital letters
    let lettersPattern = /(?<=#)([A-Z]{1,})(?=#)|(?<=\$)([A-Z]{1,})(?=\$)|(?<=%)([A-Z]{1,})(?=%)|(?<=&)([A-Z]{1,})(?=&)/g;
    let capitals = lettersStr.match(lettersPattern).join("").split("");

    // part two: asciiCode:length
    let infoPattern = /(\d{2}):(\d{2})/g;
    let digits = infoStr.match(infoPattern);
    
    digits = digits.map(curr => { 
        curr = curr.split(":").map((x) => Number(x));  
        return curr;
     });

     // part three: word extraction
     let words = [];
     for (const [letterCharCode, wordLength] of digits) {
        
        for(const word of wordsStr.split(" ")) {

            if(word[0].charCodeAt(0) === letterCharCode 
                && word.length === wordLength + 1) {  // Alternative: (word[0] === String.fromCharCodeAt(letterCharCode) && word.length === wordLength + 1)
                    // Check if the word is already added
                if (!words.includes(word)) {
                    words.push(word);
                    break;
                }
            }
        }
     }

     // Word output is by the order of the found letters (at lettersStr)
     for (const capital of capitals) {
        for (const word of words) {
            if(capital === word[0]) {
                console.log(word);
                break;
            }
        }
     }
    
}

postOffice(["sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos"]);

console.log("=====================");

postOffice(['Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig']);

/* Alternative solution:

function postOffice(input) {
  const [letters, wordsInfo, words] = input.shift().split('|');
  const firstLetterPattern = /(?<=[\#\$\%\*\&])(?:\w+)(?=[\#\$\%\*\&])/gm;
  const wordsInfoPattern = /[\d]+:[\d]{2}/gm;

  const firstLetters = letters.match(firstLetterPattern).join('');
  const matches = wordsInfo.match(wordsInfoPattern);
  const result = [];

  for (const match of matches) {
    const [letterCharCode, wordLength] = match.split(':').map((x) => Number(x));

    for (const word of words.split(' ')) {
      if (
        word[0] === String.fromCharCode(letterCharCode) &&
        word.length === wordLength + 1
      ) {
        if (!result.includes(word)) {
          result.push(word);
          break;
        }
      }
    }
  }

  for (const letter of firstLetters) {
    for (const word of result) {
      if (letter === word[0]) {
        console.log(word);
      }
    }
  }
}

postOffice([
  'sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos',
]);
console.log('---------------');
postOffice([
  'Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig',
]);

*/