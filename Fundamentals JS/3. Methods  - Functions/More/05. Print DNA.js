function printDNA(n) {

    let print = function(n) {
        let line = "ATCGTTAGGG" // 5 * 2 symbols -> Total
        let index  = 0;
    
        let shapeCnt = 0;
        for (let i = 0; i < n; i++) {
    
            if(shapeCnt === 0) {
                console.log(`**${line[index]}${line[++index]}**`);
            } else if (shapeCnt === 1 || shapeCnt === 3) {
                console.log(`*${line[index]}--${line[++index]}*`);
            } else if (shapeCnt === 2) {
                console.log(`${line[index]}----${line[++index]}`);
            }
            shapeCnt++;
            if(shapeCnt === 4) {
                shapeCnt = 0;
            }
    
            index++;
            if (index > 9) {
                index = 0;
            }
        } 
    }

    print(n);

}

printDNA(4);
printDNA(10);