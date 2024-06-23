function splitter(text) {
    let output = text[0];

    for (let index = 1; index < text.length; index++) {
        let isUpperCase = text.charCodeAt(index) >= 65 && text.charCodeAt(index)<= 90;
        if (isUpperCase) {
            output += `, ${text[index]}`;
        } else {
            output += text[index];
        }
    }

    console.log(output);
}


splitter('SplitMeIfYouCanHaHaYouCantOrYouCan');

splitter('HoldTheDoor');

splitter('ThisIsSoAnnoyingToDo');
