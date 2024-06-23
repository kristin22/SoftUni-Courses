function orders(drink, n) {

    const bill = function(drink, n) {
        let total = 0;

        switch (drink) {
            case "coffee":  total = n * 1.5;   break;
            case "water":   total = n * 1;   break;
            case "coke":    total = n * 1.4;   break;
            case "snacks":  total = n * 2;   break;
        }
    
        console.log(total.toFixed(2));
    }
    
    bill(drink, n);
}

orders("water", 5);
orders("coffee", 2);