function validityChecker(...pointsArr) {   
    // [x1, y1, x2, y2] 
    let x1 = pointsArr[0], y1 = pointsArr[1];

    let x2 = pointsArr[2], y2 = pointsArr[3];

    let x = 0,            y = 0;


    const check = (x1, y1, x, y) => {
        let result = Math.sqrt(Math.pow(Math.abs(x1 - x), 2) + Math.pow(Math.abs(y1 - y), 2));

        if(Number.isInteger(result) === true) {
            console.log(`{${x1}, ${y1}} to {${x}, ${y}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x}, ${y}} is invalid`);
        }
    }

    check(x1, y1, x, y);
    check(x2, y2, x, y);
    check(x1, y1, x2, y2);

}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);