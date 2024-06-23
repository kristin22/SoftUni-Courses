function mirrorWords(input) {
    let str = input[0];
    let pairs = [];
    let pattern = /([@#])(?<word1>[a-zA-Z]{3,})\1\1(?<word2>[a-zA-Z]{3,})\1/g;
    let totalPairsCount = 0;
    
    let match = pattern.exec(str);
    while (match) {
        let word1 = match.groups.word1;
        let word2 = match.groups.word2;
        let word2Rev = (word2).split('').reverse().join('');

        totalPairsCount++;

        if (word1 === word2Rev) {
            pairs.push(`${word1} <=> ${word2}`);
        }

        match = pattern.exec(str);
    }


    if (totalPairsCount === 0) {
        console.log("No word pairs found!");
    } else {
        console.log(`${totalPairsCount} word pairs found!`);
    }

    if (pairs.length === 0) {
        console.log("No mirror words!");
        return;
    }
    console.log(`The mirror words are:\n${pairs.join(", ")}`);
}

mirrorWords(["@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r"]);

mirrorWords(["#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@"]);

mirrorWords(["#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#"]);