function activationKeys(input) {    // 85/100
    let key = input.shift();
    input.pop();

    let print = (msg) => { console.log(msg); }

    input.forEach(line => {
        line = line.split(">>>");

        if (line[0]=== "Contains") {
            if (key.includes(line[1])) {
                print(`${key} contains ${line[1]}`);
            } else {
                print("Substring not found!");
            }
        } else if (line[0] === "Flip") {
            line[2] = Number(line[2]);
            line[3] = Number(line[3]);
            if (line[1] === "Upper") {
                for(let i = line[2]; i < line[3]; i++) {
                    key = key.replace(key[i], key[i].toUpperCase());
                }
            } else if(line[1] === "Lower") {
                for(let i = line[2]; i < line[3]; i++) {
                    key = key.replace(key[i], key[i].toLowerCase());
                }
            }
            print(key);
        } else if (line[0] === "Slice") {
            line[1] = Number(line[1]);
            line[2] = Number(line[2]);

            key = key.slice(0, line[1]) + key.slice(line[2]);
            print(key);
        }

    });

    print(`Your activation key is: ${key}`)
}

activationKeys(["abcdefghijklmnopqrstuvwxyz",
                "Slice>>>2>>>6",
                "Flip>>>Upper>>>3>>>14",
                "Flip>>>Lower>>>5>>>7",
                "Contains>>>def",
                "Contains>>>deF",
                "Generate"]);

// activationKeys(["134softsf5ftuni2020rockz42",
//                 "Slice>>>3>>>7",
//                 "Contains>>>-rock",
//                 "Contains>>>-uni-",
//                 "Contains>>>-rocks",
//                 "Flip>>>Upper>>>2>>>8",
//                 "Flip>>>Lower>>>5>>>11",
//                 "Generate"]);