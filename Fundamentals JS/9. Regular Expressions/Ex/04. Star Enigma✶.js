function starEnigma(input)  {
    input.shift();

    // decryption:
    let decrypted = [];
    let aCnt = 0;
    let dCnt = 0;
    let pattern = /[star]*/gi;

    input.forEach(line => {
        let tester = line.match(pattern).join("");
        let count = 0;

        if (tester) {
            count += tester.length;

            line = line.split("");
            for (let i = 0; i < line.length; i++) {
                let num = line[i].charCodeAt(0) - count;
                line[i] = String.fromCharCode(num);
            }
        }

        line  = line.join("");
        decrypted.push(line);
    });
    
    // line validating:
    let validator = /[^@\-!:>]*@[a-zA-Z][^@\-!:>]*:\d+[^@\-!:>]*\!(?<attackType>[A|D]{1})\![^@\-!:>]*\-\>\d+/

    decrypted = decrypted.map((line) => { 
        let isValid = line.match(validator);

        if (isValid) {
            let aOrD = isValid.groups.attackType;

            if (aOrD === "A") {
                aCnt++;
            } else if (aOrD === "D") {
                dCnt++;
            }

            return (line.match(validator)).join(""); 
        }
    });
    
    decrypted = decrypted.filter(line => { return line !== undefined; })

    // sorting the planets alphabetically and printing them

    let attacked = [];
    let destroyed = [];


    console.log(`Attacked planets: ${aCnt}`);
    if (aCnt > 0) {
        decrypted.forEach(line => {
            let planet = line.match(/(?:@)[a-zA-z]+/).join("");
            planet = planet.replace("@", "");

            if (line.match(/\!A\!/)) {
                // console.log(`-> ${planet}`);
                attacked.push(planet);
            }
        })
    }

    
    if (attacked.length !== 0) {
        attacked = attacked.sort();
        attacked.forEach(planet => { console.log(`-> ${planet}`); });
    }


    console.log(`Destroyed planets: ${dCnt}`);
    if (dCnt > 0) {
        decrypted.forEach(line => {
        let planet = line.match(/(?:@)[a-zA-z]+/).join("");
        planet = planet.replace("@", "");

        if (line.match(/\!D\!/)) {
            // console.log(`-> ${planet}`);
            destroyed.push(planet);
        }
        })
    }

    // destroyed = destroyed.sort();
    if (destroyed.length !== 0) {
        destroyed = destroyed.sort();
        destroyed.forEach( planet => { console.log(`-> ${planet}`); });
    }
}

starEnigma(['2',
            'STCDoghudd4=63333$D$0A53333',
            'EHfsytsnhf?8555&I&2C9555SR']);

starEnigma(['3',
            "tt(''DGsvywgerx>6444444444%H%1B9444",
            'GQhrr|A977777(H(TTTT',
            'EHfsytsnhf?8555&I&2C9555SR']);
