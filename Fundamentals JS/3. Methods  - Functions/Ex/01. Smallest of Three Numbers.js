function smallestNum(a, b, c) {
/*    let x = a;

    if (a > b) {
        x = b;
    }
    if (a > c) {
        x = c;
    }
    
    console.log(x);
*/

/*
    let first = function compare1(x, y) {
        if (x <= y) {
            return x;
        } else if (y < x) {
            return y;
        }
    }


    let x = first(a, b);
    x = first(x, c);
    
    console.log(x);

*/


    let second = (x, y) => {
        if (x <= y) {
            return x;
        } else if (y < x) {
            return y;
        }
    }

    let x = second(a, b);
    x = second(x, c);
    
    console.log(x);
    
    // console.log(typeof second);

}

smallestNum(2, 5, 3);
smallestNum(600, 342, 123);
smallestNum(25, 21, 4);
smallestNum(2, 2, 2);