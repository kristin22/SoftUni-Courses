function excellent(input) {
    let grade = input[0];
    
    if(grade >= 5.50) {
        console.log("Excellent!");
    }
}

excellent(["6"]);
excellent(["5"]);
excellent(["5.50"]);
excellent(["5.49"]);