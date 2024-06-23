function subString(str, starts, ends) {
    const subStr = str.substring(starts, starts + ends);
    console.log(subStr);
}

subString('ASentence', 1, 8); 

subString('SkipWord', 4, 7);