function strSerialize(line) {
    line = line.join("").split("");
    let obj = {};
    // obj[line[0]] = `${line[0]}:0`;

    let index = -1;
    for (let l of line) {
        //TODO: fix the input indexes
        index++;
        if (obj.hasOwnProperty(l)) {
            obj[l] += `/${index}`;
        } else {
            obj[l] = `${l}:${index}`;
        }
    }

    Object.values(obj).forEach(el => {console.log(el);})
}

strSerialize(["abababa"]);

strSerialize(["avjavamsdmcalsdm"]);