function rageQuit(input) {
    let output = "";
    let nums = input[0].match(/\d+/g);
    let strings = input[0].split(/\d+/).filter(str => {return str !== ""});
    let uniqueSymbols = [];

    for (let n = 0; n < strings.length; n++) {
        let repetition = Number(nums.shift());
        for(let r = 0; r < repetition; r++) {
            output += strings[n];
        } 
    }

    // strings.map(str => { return str.toUpperCase(); });

    output = output.toUpperCase();

    output = output.split("");
    output.forEach(ch => {
        if (!uniqueSymbols.includes(ch)) {
            uniqueSymbols.push(ch);
        }
    });

    output = output.join("");
    console.log(`Unique symbols used: ${uniqueSymbols.length}`);
    console.log(output);
}

rageQuit(["a3"]);
rageQuit(["aSd2&5s@1"]);