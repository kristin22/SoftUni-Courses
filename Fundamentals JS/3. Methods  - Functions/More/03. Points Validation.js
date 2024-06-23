function pointsValidator(pointsArr) {   
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

pointsValidator([3, 0, 0, 4]);
pointsValidator([2, 1, 1, 1]);



/*

    // check 1
    let result = Math.sqrt(Math.pow(Math.abs(x1 - x), 2) + Math.pow(Math.abs(y1 - y), 2));

    if(Number.isInteger(result) === true) {
        console.log(`{${x1}, ${y1}} to {${x}, ${y}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x}, ${y}} is invalid`);
    }

    // check 2
    result = Math.sqrt(Math.pow(Math.abs(x2 - x), 2) + Math.pow(Math.abs(y2 - y), 2));

    if(Number.isInteger(result) === true) {
        console.log(`{${x2}, ${y2}} to {${x}, ${y}} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {${x}, ${y}} is invalid`);
    }

    // check 3
    result = Math.sqrt(Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2));

    if(Number.isInteger(result) === true) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

*/