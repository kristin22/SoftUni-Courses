function cutReverse(str) {

    // Splitting the string into 2 equals:
    let str1 = str.substr(0, str.length / 2);
    let str2 = str.substr(str.length / 2, str.length - str.length / 2);

    // Reversing Them:
    str1 = str1.split("").reverse().join("");
    str2 = str2.split("").reverse().join("");

    //Output:
    console.log(str1);
    console.log(str2);

}

cutReverse('tluciffiDsIsihTgnizamAoSsIsihT');

cutReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');

