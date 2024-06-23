function imitationGame(input) { // 33/100
    let message = input.shift();
    input.pop();

    for(let el of input) {
        el = el.split("|");

        if (el[0] === "Move") {
            message = message.slice(Number(el[1]), message.length) + message.slice(0, Number(el[1]));
        } else if (el[0]=== "Insert") {
            message = message.slice(0, Number(el[1])) + el[2] + message.slice(Number(el[1]));
        } else if (el[0] === "ChangeAll") {
            // message = message.replaceAll(el[1], el[2]);    => replaceAll doesn't work in judge'
            while (message.includes(el[1])) {
                message = message.replace(el[1], el[2]);
            }
        }
    }

    console.log("The decrypted message is:", message);
}

imitationGame([ 'zzHe',
                'ChangeAll|z|l',
                'Insert|2|o',
                'Move|3',
                'Decode']);

imitationGame([ 'owyouh',
                'Move|2',
                'Move|3',
                'Insert|3|are',
                'Insert|9|?',
                'Decode'])