function circleCalc(input) {    // error ==> 80% - Judge
	let r = Number(input[0]);
    let pi = Math.PI;

    let area  = pi * (r * r);
    let perimeter = 2 * pi * r;

    console.log(area.toFixed(2) + "\n" + perimeter.toFixed(2));
}

circleCalc(["3"]);
circleCalc(["4.5"]);
circleCalc(["35.875"]);