function distancePoints(x1, y1, x2, y2) {
    //  d=√((x2 – x1)² + (y2 – y1)²)

    let x = Math.pow((x2 - x1), 2);
    let y = Math.pow((y2 - y1), 2);

    let  d = Math.sqrt(x + y);
    console.log(d);

}

distancePoints(2, 4, 5, 0);