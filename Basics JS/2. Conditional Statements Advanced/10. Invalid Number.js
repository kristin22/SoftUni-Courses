function numberCheck(input) {
    let number = Number(input[0]);

    if ((number < 100 || number > 200) && number != 0) {
        console.log("invalid");
    }
}

numberCheck(["75"]);
numberCheck(["-1"]);
numberCheck(["150"]);
numberCheck(["100"]);
numberCheck(["220"]);
numberCheck(["200"]);
numberCheck(["199"]);
numberCheck(["0"]);