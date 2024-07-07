function namesList(list) {
    list.sort((a, b) => a.localeCompare(b));
    let msg = "";
    for (let i = 0; i < list.length; i++) {
        msg += `${i+1}.${list[i]}\n`;
    }
    return msg;
}

console.log(namesList(["John", "Bob", "Christina", "Ema"])); 