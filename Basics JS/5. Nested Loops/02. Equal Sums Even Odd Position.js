function equalSum(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
	// [100 000; 300 000]

	let firstDigit, secondDigit, thirdDigit, 
		fourthDigit, fifthDigit, sixthDigit;

	let evenSum = 0, oddSum = 0;
    let text = "";

	for (let currNum = startNum; currNum <= endNum; currNum++)
	{
		// % 10 -> взима последната цифра от числото

		firstDigit = parseInt(currNum / 100000);
		secondDigit = parseInt(currNum / 10000 % 10);
		thirdDigit = parseInt(currNum / 1000 % 10);
		fourthDigit = parseInt(currNum / 100 % 10);
		fifthDigit = parseInt(currNum / 10 % 10);
		sixthDigit = parseInt(currNum % 10);
		
		evenSum = secondDigit + fourthDigit + sixthDigit;
		oddSum = firstDigit + thirdDigit + fifthDigit;

		if (evenSum === oddSum) {
			text += `${currNum} `;
		}
	}

    console.log(text.trim());
}

equalSum(["100000",
        "100050"]);


/*	Алтернативно решение на 02. Equal Sum Even Odd Position

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

*/