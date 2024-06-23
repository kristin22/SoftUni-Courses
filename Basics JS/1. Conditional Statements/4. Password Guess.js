function checkPass(input) {
    let password = "s3cr3t!P@ssw0rd";
    let entered = input[0];
    
    if(entered === password) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}

checkPass(["qwerty"]);
checkPass(["s3cr3t!P@ssw0rd"]);
checkPass(["s3cr3t!p@ss"]);