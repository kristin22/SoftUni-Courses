function wordsTracker(input) {
    let words = {};

    input.shift().split(" ").forEach(word => {
        words[word] = 0;
    });

    for(const word of input) {
        if (words.hasOwnProperty(word)) {
            words[word]++;
        }
    }

    function sortByKey(obj) {
        let keys = Object.keys(obj);
        keys.sort().reverse();
    
        let sorted = {};
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            sorted[key] = obj[key];
        }
        return sorted;
    }

    let sorted = sortByKey(words);

    for (let word in sorted) {
        console.log(word, "-", sorted[word]);
    }
}

wordsTracker([  'this sentence', 
'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task' ]);

console.log("=============");

wordsTracker([ 'is the', 
'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);
