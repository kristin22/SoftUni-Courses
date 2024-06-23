function passReset(input) {
    let password = input.shift();
    input.pop();

    function print(msg) {
        console.log(msg);
    }

    input.forEach(line => {
        if (line === "TakeOdd") {   
            let newPass = "";
            for(let i = 1; i < password.length; i+=2) {
                newPass += password[i];
            }
            password = newPass;
            print(password);
        } else {
            line = line.split(" ");
            if (line[0] === "Cut") {
                line[1] = Number(line[1]);
                line[2] = Number(line[2]);
                let repl = password.slice(line[1], line[1]+line[2]);
                password = password.replace(repl, "");
                print(password);
            } else if (line[0] === "Substitute") {
                if (password.includes(line[1])) { // if includes substr
                    while(password.includes(line[1])) {
                        password = password.replace(line[1], line[2]);
                    }
                    print(password);
                } else {
                    print("Nothing to replace!");
                }
            }
        }
    });

    print(`Your password is: ${password}`);
}

passReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
            "TakeOdd",
            "Cut 15 3",
            "Substitute :: -",
            "Substitute | ^",
            "Done"]);

// passReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
//             "TakeOdd",
//             "Cut 18 2",
//             "Substitute ! ***",
//             "Substitute ? .!.",
//             "Done"]);