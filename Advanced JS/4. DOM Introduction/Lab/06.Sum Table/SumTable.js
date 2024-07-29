// function sumTable() {
//     let lines = document.querySelectorAll("table tr")
//     let total = 0;
    
//     for(let i=1; i<lines.length-1; i++) {
//         let currLine = lines[i].children;   // Beer 2.88
//         let currPrice = +(currLine[currLine.length-1].textContent);
//         total += currPrice;
//     }

//     document.getElementById("sum").textContent = total;

// }


function sumTable() {
    let tds = document.getElementsByTagName("td")
    let total = 0;
    
    for(let i=1; i<tds.length-2; i+=2) {
        let currPrice = +tds[i].textContent; 
        
        total += currPrice;
    }

    document.getElementById("sum").textContent = total;

}




