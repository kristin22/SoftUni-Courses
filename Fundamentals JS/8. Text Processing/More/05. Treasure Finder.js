function treasureFinder(input) {
    let strs = [];
    let keys = strs.shift().split(" ").map(Number);
    let k = keys.length;

    
    for (let i = 0; i < strs.length - 1; i++) {
        let currStr = strs[i];
        for(let l = 0; ; l++) {
            if (l === k) { l = 0; }
            let n = currStr.charCodeAt(l) - keys[l];

            console.log(currStr[l]);

            let currStr = [];
            currStr.push(String.fromCharCode(n));
            // strs[i][l] = String.fromCharCode(n);
            
        }
        strs.push(currStr);
    }
}

treasureFinder(["1 2 1 3",
                "ikegfp'jpne)bv=41P83X@",
                "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
                "find"]);

treasureFinder(["1 4 2 5 3 2 1",
                `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
                "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
                "'stj)>34W68Z@",
                "find"]);