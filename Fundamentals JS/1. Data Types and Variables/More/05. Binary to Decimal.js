function binaryToDecimal(binaryNum) {
    let decimalNum = parseInt(binaryNum, 2);
    console.log(decimalNum);
}

binaryToDecimal("00001001");
binaryToDecimal("11110000");

/*  Another Solution

function binaryToDecimals(numberAsString) {
    numberAsString = numberAsString.split(""); // Разделяме числото на отделни символи чрез .split("") и го получаваме като масив от символи
    let decimal = 0;
    let power = numberAsString.length - 1;    // Степента е равна на дължината на стринга - 1 
    for (let i = 0; i < numberAsString.length; i++) {       // Въртим по елементите на масива
        decimal += Number(numberAsString[i]) * Math.pow(2, power); // Взимаме числото от масива и го преобръщаме към число, след което го умноаважаме по 2 на степента 
        power--; // Намаляме степента всеки път с единица.
    console.log(decimal);
}

*/