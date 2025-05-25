function subtract() {
    let firstNumber = +document.getElementById("firstNumber").value;
    let secondNumber = +document.getElementById("secondNumber").value;

    document.getElementById("result").innerHTML = firstNumber - secondNumber;
}

/*
function subtract() {
    const html = {
        firstNumber: document.getElementById("firstNumber"),
        secondNumber: document.getElementById("secondNumber"),
        result: document.getElementById("result")
    }

    html.result.innerHTML = +html.firstNumber.value - +html.secondNumber.value;
}
*/