function reg(input) {   // 90/100
    let username = input.shift();   
    input.pop();

    input.forEach(line => {
        line = line.split(" ");

        if (line[0] === "Letters") {
            if (line[1] === "Lower") {
                username = username.toLowerCase();
            } else {
                username = username.toUpperCase();

            }
            console.log(username);
        } else if (line[0] === "Reverse") {
            if ((Number(line[1]) >= 0 && Number(line[1]) < username.length) && (Number(line[1]) >= 0 && Number(line[1]) < username.length)) {
                let subStr = username.substring(Number(line[1]), Number(line[2])+1)
                .split("").reverse().join("");
                console.log(subStr);
            }

        } else if (line[0] === "Substring") {
            if (username.includes(line[1])) {
                username = username.replace(line[1], "");
                console.log(username);
            } else {
                console.log(`The username ${username} doesn't contain ${line[1]}.`);
            }
        } else if (line[0] === "Replace") {
            while (username.includes(line[1])) {
                username = username.replace(line[1], "-");
            }
            console.log(username);
        } else if (line[0] === "IsValid") {
            if (username.includes(line[1])) {
                console.log("Valid username.");
            } else {
                console.log(`${line[1]} must be contained in your username.`);
            }
        }
    });

}

reg(["John",
    "Letters Lower",
    "Substring SA",
    "IsValid @",
    "Registration"]);

reg(["ThisIsSoftUni",
    "Reverse 1 3",
    "Replace S",
    "Substring hi",
    "Registration"]);