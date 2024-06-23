/*  

Drawing Figures with Loops - More Exercises

01. Rectangle of 10 x 10 Stars
02. Rectangle of N x N Stars
03. Square of Stars
04. Triangle of Dollars
05. Square Frame
06. Rhombus of Stars
07. Christmas Tree
08. Sunglasses
09. House
10. Diamond


*/

//	Алтернативно решение на 02. Equal Sum Even Odd Position

function demo(input) {
	let start = Number(input[0]);
	let end = Number(input[1]);
    let printLine = "";

	for (let currentNum = start; currentNum <= end; currentNum++) {
		let currentNumToString = currentNum + "";
		// let currentNumToString = currentNum.toString();
		// let currentNumToString = `${currentNum}`;

        let sumOdd = 0;
        let sumEven = 0;

        for (let i = 0; i < currentNumToString.length; i++) {    // < от length, а НЕ <=
            // console.log(currentNumToString[i]);
            let position = i + 1; // позицията на цифрата 1 в числото 123 е първа, но ние започваме да броим от 0 и затова добавяме 1
            let currentDigit = Number(currentNumToString[i]);  // текущата цифра е под формата на стринг и затова я преобразувате ;

            if  (position % 2 === 0) {
                sumEven += currentDigit; 
            } else {
                sumOdd += currentDigit;
            }
        }

        if (sumEven === sumOdd) {
            printLine += currentNum + " ";
        }

	}

    console.log(printLine);
}

demo(["100000", "100050"]);
