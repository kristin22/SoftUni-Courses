function inRange(input) {
    let number = Number(input);

    if ((-100 <= number && number <= 100) && number != 0) { // може да се запише и -100 <= number <= 100
        console.log("Yes");
    } else { 
        console.log("No");
    }
}

inRange(["-25"]);
inRange(["0"]);
inRange(["25"]);