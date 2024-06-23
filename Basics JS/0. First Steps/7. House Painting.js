function housePaint(input) {
    let x = input[0];
    let y = input[1];
    let h = input[2];

    // green - for the walls;   red - for the roof
    let greenPaint = 2 * (( x * y) - (1.5 * 1.5));
    greenPaint += 2 * (x * x) - 2.4;
    greenPaint /= 3.4;

    let redPaint = 2 * x * y;
    redPaint += (2 * (x * h / 2));
    redPaint /= 4.3; 

    console.log(greenPaint.toFixed(2) + "\n" + redPaint.toFixed(2));
}

housePaint([6, 10, 5.2]);
housePaint([10.25, 15.45, 8.88]);