function hardWord(input) {      // 83/100

    let [letter, words] = input;
    letter = letter.split(" ");

    for (let index = 0; index < letter.length; index++) {
        let word = letter[index];
        let n = word.length;
        if (word[n-1] !== "_") {
            n--;
        }

        if (word[0] === "_") {  // check the last symbol . , etc.
            
            for (let i = 0; i < words.length; i++) {
                if ((words[i]).length === n) {
                    if (word[n - 1] ==="_") {
                        letter[index] =  words[i];
                        
                    } else {
                         letter[index] = `${words[i]}${word[length - 1]}`;
                    }
                    break;
                }
            }
        }
    }

    console.log(letter.join(" "));

}

hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);
// 3    5           4       6           7        10            8
