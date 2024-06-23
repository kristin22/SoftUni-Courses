function point(input) {
	let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);
    let x = Number(input[4]);
    let y = Number(input[5]);


    let isOne = (x === x1 || x === x2) && (y > y1 && y < y2);
    let isTwo = (y === y1 || y === y2) && (x > x1 && x < x2);
    let isThree = (x === x1 && y === y2) || (x === x2 && y === y1);
	if (isOne || isTwo || isThree) {
		console.log("Border");
	} else {
		console.log("Inside / Outside");
	}
}

point(["2",
    "-3",
    "12",
    "3",
    "2",
    "3"]);