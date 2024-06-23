function result (a, b, c) {

    let sum =           (a, b) => a + b;
    let substract =     (sum, c) => sum - c;
    
    console.log(substract(sum(a, b), c));
    

/*    let sum2 = function(a, b) {
        return a + b;
    };
    let substract2 = function(sum2, c) {
        return sum2 - c;
    }

    console.log(substract2(sum(a, b), c));
*/

}


result(23, 6, 10);
result(1, 17, 30);
result(42, 58, 100);