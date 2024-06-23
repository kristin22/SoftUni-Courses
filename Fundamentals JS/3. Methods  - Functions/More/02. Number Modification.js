function numberModification(number) {

    const modifier = (number) => {
        number = number.toString();

        let sum = 0;
        let average = 0;
    
        let n = number.length;
    
        for(let i = 0; i < n; i++) {
            sum += Number(number[i]);
        }
    
        average = sum / n;
    
        if (average > 5) {
            console.log(number);
        } else {
            while (average < 5) {
                n++;
                sum += 9;
                number += "9";
                average = sum / n;
    
            }
            if (average > 5) {
                console.log(number);
            }
        }
    }

    modifier(number);

}

numberModification(101);
numberModification(5835);