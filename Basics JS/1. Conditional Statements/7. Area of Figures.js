function area(input) {
    let figure = input[0];
    let a = input[1];
    let area = undefined;

    if(figure === "square") {
        area = a * a;
    } else if(figure ==="rectangle") {
        let b = input[2];
        area = a * b;
    } else if(figure === "circle") {
        area = 3.14159265359 * (a * a);    // r = a;
    } else if(figure === "triangle") {
        let h = input[2];
        area = a * h / 2;
    }

    console.log(area.toFixed(3));
}

area(["square", "5"]);
area(["rectangle", "7","2.5"]);
area(["circle", "6"]);
area(["triangle", "4.5", "20"]);