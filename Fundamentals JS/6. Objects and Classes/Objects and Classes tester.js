// 6. Objects and Classes => More: 05. Sequences.js

function sequences(input) {
    let arrays = [];

        // input.forEach(arr => {
        //     arr = arr.substring(1, arr.length-1).split(", ").map((x) => Number(x)).sort((a, b) => b-a);
        // });
            
        let arr = input.shift();
        arr = arr.substr(1, arr.length-2).split(", ").map((x) => Number(x)).sort((a, b) => b-a);
        arrays.unshift(arr);
        
        while(input) {
            arr = input.shift();
            arr = arr.substr(1, arr.length-2);
            arr = arr.split(", ").map((x) => Number(x)).sort((a, b) => b-a);
            let flag = false;
            
            for(const added of arrays) {
                let checker = [...added];
                let toCheck = [...arr];     // [...arr] or arr.slice()   =>   copies array whithout creating a reference to it
                let matches = 0;

                // if (checker.length !== toCheck.length) {
                //     arrays.unshift(arr);
                //     break;
                // }
                for(let i = 0; i < checker.length;  i++) {
                    if (checker[i] === toCheck[i]) {
                        matches++;
                    }
                }

                if (matches === checker.length) {   // it's already added
                    flag = true;   
                }
            }

            if(!flag) {
                arrays.unshift(arr);
            }
        }
        
        
    console.log(arrays);
    
}

sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
           "[10, 1, -17, 0, 2, 13]",
           "[4, -3, 3, -2, 2, -1, 1, 0]"]);

console.log("===========");

sequences(["[7.14, 7.180, 7.339, 80.099]",
           "[7.339, 80.0990, 7.140000, 7.18]",
           "[7.339, 7.180, 7.14, 80.099]"]);