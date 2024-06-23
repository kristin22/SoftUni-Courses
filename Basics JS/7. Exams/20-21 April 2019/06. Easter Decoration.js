function decoration(input) {
    let clientsCount = Number(input[0]);

    let currProduct = "";
    let index = 0;

    let total = 0;

    for(let i = 1;i <= clientsCount; i++) {
        
        let currBill = 0;
        let count = 0;

        while (true) {
            currProduct = input[++index];
            if(currProduct === "Finish") {
                if(count % 2 === 0) {
                    currBill *= 0.8;
                }
                    total += currBill;
 
                console.log(`You purchased ${count} items for ${currBill.toFixed(2)} leva.`);
                break;
            }
            switch (currProduct) {
                case "basket":
                    currBill += 1.5;
                    break;
                case "wreath":
                    currBill += 3.8;
                    break;
                case "chocolate bunny":
                    currBill += 7;
                    break;
            }
            count++;
        }
    }
    console.log(`Average bill per client is: ${(total / clientsCount).toFixed(2)} leva.`);

}

decoration(["2",
"basket",
"wreath",
"chocolate bunny",
"Finish",
"wreath",
"chocolate bunny",
"Finish"]);

// decoration(["1",
// "basket",
// "wreath",
// "chocolate bunny",
// "wreath",
// "basket",
// "chocolate bunny",
// "Finish"]);