function  passwordGenerator(input) {
    let str = input[0] + input[1];
    let chars = (input[2]).toUpperCase();

    let lastIndex = chars.length - 1;
    let currIndex = -1;
    
    // Inserting the letters
    for(let l of str) {

        // a e i o u
        let isVowel = l === "a" || l === "e" || l === "i" || l === "o" || l === "u";

        if (isVowel) {
            if (currIndex === lastIndex) {
                currIndex = 0;
            } else {
                currIndex++;
            }

            str = str.replace(l, chars[currIndex]);
        }
    }


    // Reversing the password
    str = str.split("").reverse().join("");

    console.log("Your generated password is", str);
}

passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange']);

passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);

passwordGenerator(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed']);

// ilovepizzaihatevegetables
// olovepizzaihatevegetables
// olrvepizzaihatevegetables