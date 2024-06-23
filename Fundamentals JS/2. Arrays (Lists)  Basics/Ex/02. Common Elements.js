function common(arr1, arr2) {

    for (let f = 0; f < arr1.length; f++) {
        for (let s = 0; s < arr2.length; s++) {
            if (arr1[f] === arr2[s]) {
                console.log(arr1[f]);
            }
        }
    }
}

common(['Hey', 'hello', 2, 4, 'Peter', 'e'],
        ['Petar', 10, 'hey', 4, 'hello', '2']
);

common(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
        ['s', 'o', 'c', 'i', 'a', 'l']
);