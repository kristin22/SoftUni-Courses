function oddOccur(input) {
    let unsorted = {};

    input.toLowerCase().split(" ").forEach(word => {
        if(unsorted.hasOwnProperty(word)) {
            unsorted[word]++;
        } else {
            unsorted[word] = 1;
        }
    });


    for(key in unsorted) {
        if(unsorted[key] % 2 === 0) {
            delete unsorted[key];
        }
    }

    unsorted = Object.entries(unsorted).sort((a, b) => b[1] - a[1]);

    let output = "";
    unsorted.forEach(el => output += `${el[0]} `);
    console.log(output.trim());
}

oddOccur('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

oddOccur('Cake IS SWEET is Soft CAKE sweet Food');