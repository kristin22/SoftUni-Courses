function repeatString(str, n) {
    
    const print = function(str, n) {
        let output = "";
        for (let i = 0; i < n; i++) {
            output += str;
        }
    
        console.log(output);
    }

    print(str, n);

}


repeatString("abc", 3);
repeatString("String", 2);