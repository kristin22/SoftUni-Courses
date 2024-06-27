function sameNums(n) {
    let nums = ("" + n).split("").map(x => +x);
    let firstNum = nums.shift();
    let sum =  firstNum;
    let flag = false;

    nums.forEach(num => {
        sum += num;
        if(num !== firstNum) {
            flag = true;
        }
    });

    if (flag) {
        return `false\n${sum}`;
    } else {
        return `true\n${sum}`;
    }
}

console.log(sameNums(2222222));
console.log(sameNums(1234));