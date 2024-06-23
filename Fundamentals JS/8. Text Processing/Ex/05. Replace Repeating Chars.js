function replaceRepeat(str) {

    let output = "" + str[0];
    let prev = str[0];

    for(let ch = 1; ch < str.length; ch++) {
        if (str[ch] === prev) {
            continue;
        } else {
            prev = str[ch];
            output += prev;
        }
    }

    console.log(output);
}

replaceRepeat('aaaaabbbbbcdddeeeedssaa');

replaceRepeat('qqqwerqwecccwd');

/*  Alternative solution:

function replace(str) {
    let result = str.split("").reduce((a, b, i) => {
       return str[i-1] !== b ? (a += b) : a }, "")
    console.log(result);
}

*/