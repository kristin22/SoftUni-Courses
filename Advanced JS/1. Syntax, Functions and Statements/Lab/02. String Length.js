function  strLength(str1, str2, str3) {
    let totalLength = str1.length + str2.length + str3.length;
    console.log(`${totalLength}\n${Math.floor(totalLength/3)}`);
}

strLength('chocolate', 'ice cream', 'cake');
strLength('pasta', '5', '22.3');