function solution() {
    let str = '';

    return {
        append(string) { str += string; } ,
        removeStart(n) { str = str.substring(n) } /* remove the first n characters from the string, n is an integer */,
        removeEnd(n) { str = str.substring(0, str.length-n) } /* remove the last n characters from the string, n is an integer */,
        print() { console.log(str); } ,
    };
}

// sample inputs
let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

console.log('-------');


let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
