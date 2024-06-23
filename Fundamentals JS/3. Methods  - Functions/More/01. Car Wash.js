function solve(arr) {
    
    const checkCar = (arr) => {

        let n = arr.length;
        let sum = 0;

        for(let i = 0; i < n; i++) {
            let command  = arr[i];
            if (command === "soap") {
                sum += 10;
            } else if (command === "water") {
                sum *= 1.2;
            } else if (command === "vacuum cleaner") {
                sum *= 1.25;
            } else if (command === "mud") {
                sum *= 0.9;
            }
        }

        if (sum <= 0) {
            console.log(`The car is 0% clean.`);
        } else  {
            console.log(`The car is ${sum.toFixed(2)}% clean.`);
        }
    }

    checkCar(arr);
}

solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
solve(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);