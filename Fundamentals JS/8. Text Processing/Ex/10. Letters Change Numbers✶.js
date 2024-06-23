function letterNumberChange(arr) {
    let total = 0;
    arr = arr.split(" ").filter((str) => str !== '');

    for (let str of arr) {
        let a = str[0];
        let b = str[str.length - 1];
        let num = Number(str.slice(1, str.length - 1));

        if (a.charCodeAt(0)>= 65 && a.charCodeAt(0) <= 90) {    // UpperCase 65-90
            num = num / (a.charCodeAt(0) - 64);
        } else if (a.charCodeAt(0) >= 97 && a.charCodeAt(0) <= 122) {     // LowerCase 97-122
            num = num * (a.charCodeAt(0) - 96);
        }
        
        if (b.charCodeAt(0)>= 65 && b.charCodeAt(0) <= 90) {    // UpperCase 65-90
            num = num - (b.charCodeAt(0) - 64);
        } else if (b.charCodeAt(0) >= 97 && b.charCodeAt(0) <= 122) {     // LowerCase 97-122
            num = num + (b.charCodeAt(0) - 96);
        }

        total += num;
    }

    console.log(total.toFixed(2));
}

letterNumberChange('A12b s17G');

letterNumberChange('P34562Z q2576f   H456z');

letterNumberChange('a1A');