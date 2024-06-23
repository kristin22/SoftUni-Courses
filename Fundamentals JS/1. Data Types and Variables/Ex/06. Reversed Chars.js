function reverseChars(a, b, c) {
    let joined = a + b + c;
    let arrStr = joined.split('').reverse().join(' ');   // join() gives C,B,A  || join('_') gives C_B_A
    console.log(arrStr);

}

reverseChars('A', 'B', 'C');