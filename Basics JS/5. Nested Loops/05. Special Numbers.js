function specialNums(arr) {
    let number = Number(arr[0]);

    let text = "";

    for (let curr = 1111; curr <= 9999; curr++) {
        let tousands = parseInt(curr / 1000);
        let hundreds = parseInt(curr / 100 % 10) ;
        let tens = parseInt(curr / 10 % 10);
        let units = parseInt(curr % 10);

        let isSpecial = number % tousands === 0 && number % hundreds === 0 && number % tens === 0 && number % units === 0; 

        if (isSpecial) {
            text += `${curr} `; 
        }

    }

    console.log(text.trim());
}

/*  Алтернативно решение

function specialNums(input) {
    let userInput = Number(input[0]);
    let start = 1111;
    let end = 9999;

    let printLine = "";

    // 1234
    // 1 -> 0
    // 2 -> 1
    // 3 -> 2
    // 4 -> 3

    for (let currentNumber = start; currentNumber <= end; currentNumber++) {
        let currentNumberToString = currentNumber.toString();   // Преобразуваме текущото число в стринг
        let isSpecial = true;

        for (let i = 0; i < currentNumberToString.length; i++) {    // Разглеждаме всяка една от цифрите на числото
            let currentDigit = Number(currentNumberToString[i]);    // Вземаме текущата цифра от числото, но я конвертираме в Number, защото в момента тя е string

            if (userInput % currentDigit !== 0) {
                 isSpecial = false;
            }
        }

        if (isSpecial === true) {
            printLine += currentNumber + " ";
        }
    }

    console.log(printLine.trim());
}

*/

specialNums(["3"]);