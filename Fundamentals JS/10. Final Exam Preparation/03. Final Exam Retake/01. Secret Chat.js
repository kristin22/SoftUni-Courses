function secretChat(input) {
     let message = input.shift();
     input.pop();

     function print(msg) { console.log(msg); }

     input.forEach(line => {
        line = line.split(":|:");

        if (line[0] === "InsertSpace") {
            message = message.slice(0, Number(line[1])) + " " + message.slice(Number(line[1]));
            print(message);
        } else if (line[0] === "Reverse") {
            let index = message.indexOf(line[1]);
            let subStr = "";
            if(index > -1) {
                subStr = message.slice(index)
                        .split("").reverse().join("");
                message = message.slice(0, index) + subStr;
                print(message);
            } else {
                print("error");
            }
        } else if (line[0] === "ChangeAll") {
            // replace all ooccurrences without using replaceAll() -> judge doesn't like it
            while(message.includes(line[1])){
                message = message.replace(line[1], line[2]);
            }
            print(message);
        }

     });

     print(`You have a new text message: ${message}`);
}

secretChat([ 'heVVodar!gniV',
            'ChangeAll:|:V:|:l',
            'Reverse:|:!gnil',
            'InsertSpace:|:5',
            'Reveal']);

secretChat([ 'Hiware?uiy',
            'ChangeAll:|:i:|:o',
            'Reverse:|:?uoy',
            'Reverse:|:jd',
            'InsertSpace:|:3',
            'InsertSpace:|:7',
            'Reveal']);