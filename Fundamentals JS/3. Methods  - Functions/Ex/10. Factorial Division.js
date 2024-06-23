function factorialDivision(a, b) {
    function factorial(x) {
        let result = 1;

        if (x  > 0) {
            for(let i = 2; i <= x; i++) {
                result = result * i;
            }
        }

        return result;
    }

    factA = factorial(a);
    factB = factorial(b);

    console.log(`${(factA / factB).toFixed(2)}`);
}

factorialDivision(5, 2);
factorialDivision(6, 2);