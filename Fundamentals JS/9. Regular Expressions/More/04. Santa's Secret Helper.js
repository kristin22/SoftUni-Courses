function secretHelper(input) {
    let goodChildren = [];
    let key = input.shift();
    let pattern = /@(?<name>[A-Za-z]+)[^~@\-\!:>]*!(?<behave>G|N)!/g;

    let message = input.shift();
    while (message !== "end") {
        message =  message.split("");

        //1. decrypting the message:
        for(let i = 0; i < message.length; i++) {
            let currCharCode = message[i].charCodeAt();
            message[i] = String.fromCharCode(currCharCode -  key);
        }

        message = message.join("");   // "@Kate^jfdvbkrjgb!G!"

        // 2. searching for matches in the  current decrypted message:
        let currMatch = pattern.exec(message);

        while (currMatch !== null) {
            // 3. adding the match in the goodChildren list:
            if (currMatch.groups.behave === "G") {
                goodChildren.push(currMatch.groups.name);
            }

            currMatch = pattern.exec(message);
        }

        message = input.shift();
    }

    console.log(goodChildren.join("\n"));
}


secretHelper(['3',
            'CNdwhamigyenumje$J$',
            'CEreelh-nmguuejnW$J$',
            'CVwdq&gnmjkvng$Q$',
            'end']);

console.log("=================");

secretHelper(['3',
            "N}eideidmk$'(mnyenmCNlpamnin$J$",
            'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
            'ppqmkkkmnolmnnCEhq/vkievk$Q$',
            'yyegiivoguCYdohqwlqh/kguimhk$J$',
            'end']);