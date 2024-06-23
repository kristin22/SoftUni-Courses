function promotion(dayType, age) {
    let ticketPrice = 0;

    if(age < 0 || age > 122) {
        console.log('Error!');
        return;
    }

    switch(dayType) {
        case 'Weekday':
            if(age >= 0 && age <= 18) {
                ticketPrice = 12;
            } else if(age > 18 && age <= 64) {
                ticketPrice = 18;
            } else if(age > 64 && age <= 122) {
                ticketPrice = 12;
            }
           
            console.log(`${ticketPrice}$`);
            break;
        case 'Weekend':
            if(age >= 0 && age <= 18) {
                ticketPrice = 15;
            } else if(age > 18 && age <= 64) {
                ticketPrice = 20;
            } else if(age > 64 && age <= 122) {
                ticketPrice = 15;
            }
            console.log(`${ticketPrice}$`);
            break;
        case 'Holiday':
            if(age >= 0 && age <= 18) {
                ticketPrice = 5;
            } else if(age > 18 && age <= 64) {
                ticketPrice = 12;
            } else if(age > 64 && age <= 122) {
                ticketPrice = 10;
            }
            console.log(`${ticketPrice}$`);
            break;
    }
}

promotion('Weekday', 42);
// promotion('Holiday', -12);
// promotion('Holiday', 15);