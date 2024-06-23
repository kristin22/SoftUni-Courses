function sumAndProduct(input) {
  let number = Number(input[0]);

  let units = number % 10;

  for (let a = 1; a <= 9; a++) {
    for (let b = 9; b >= a; b--) {
      for (let c = 0; c <= 9; c++) {
        for (let d = 9; d >= c; d--) {
            let sum = a + b + c + d;
            let prod = a * b * c * d;
            if (sum === prod) {
                if (units == 5) {
                    console.log(`${a}${b}${c}${d}`);
                    return;
                }
            }
            if (prod / sum == 3) {
                if (number % 3 == 0) {
                    if (d > 0) {
                        console.log(`${a}${b}${c}${d}`);
                        return;
                    }
                }
            }
        }
      }
    }
  }
  console.log("Nothing found");
}

sumAndProduct(["1235"]);
