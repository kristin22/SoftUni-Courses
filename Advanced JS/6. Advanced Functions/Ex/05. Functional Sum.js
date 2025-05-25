function add(number) {
    let sum  = 0;

    function adder(n) {
        sum += n
        return adder
    }
    
    // Overwrite toString() of the function
    adder.toString = () => { return sum }

    return adder(number)
}
 
console.log(add(1).toString())  // 1
console.log(add(1)(6)(-3).toString())   // 4

