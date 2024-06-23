function simpleCalc(a, b, operation) {  
    // solve it without using if, switch conditional statements or ternary operators
    
    let result = 0;

    switch (operation) {
      case "add":
        result = ((x, y) => {   // defining and calling the function at the same time
          return x + y;
        })(a, b);
        break;

      case "subtract":
        result = ((x, y) => {
          return x - y;
        })(a, b);
        break;

      case "multiply":
        result = ((x, y) => {
          return x * y;
        })(a, b);
        break;

      case "divide":
        result = ((x, y) => {
          return x / y;
        })(a, b);
        break;

    }

    return console.log(result);;
  
}

simpleCalc(5, 5, "multiply");
simpleCalc(40, 8, "divide");
simpleCalc(12, 19, "add");
simpleCalc(50, 13, "subtract");