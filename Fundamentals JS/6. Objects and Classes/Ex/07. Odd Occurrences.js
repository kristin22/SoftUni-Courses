function oddOccurs(words) {
    words = words.split(" ");
    let obj = {};

    for (let word of words) {
        word = word.toLowerCase();

        if(obj.hasOwnProperty(word)) {
            obj[word]++;
        } else {
            obj[word] = 1;
        }
    }

    for (let prop in obj) {
        if (obj[prop] % 2 === 0) {
            delete obj[prop];
        }
    }

    let sorted = Object.entries(obj).sort((a, b) => {
        return b[1] - a[1];
      });

    let line = "";
    for(let [key, value] of sorted) {
        line += key + " ";
    }

    console.log(line.trim());

}

oddOccurs('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
console.log("==========");
oddOccurs('Cake IS SWEET is Soft CAKE sweet Food');


