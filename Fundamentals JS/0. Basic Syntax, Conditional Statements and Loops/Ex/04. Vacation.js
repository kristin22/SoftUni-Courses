function vacation(groupCount, groupType, dayOfWeek) {
    let total = 0;
    let price = 0;

    switch (groupType) {
        case "Students":
            switch(dayOfWeek) {
                case "Friday":      price = 8.45;
                    break;
                case "Saturday":    price = 9.80;
                    break;
                case "Sunday":      price = 10.46;
                    break;
            }
            break;
        case "Business":
            switch(dayOfWeek) {
                case "Friday":      price = 10.90;
                    break;
                case "Saturday":    price = 15.60;
                    break;
                case "Sunday":      price = 16;
                    break;
            }
            break;
        case "Regular":
            switch(dayOfWeek) {
                case "Friday":      price = 15;
                    break;
                case "Saturday":    price = 20;
                    break;
                case "Sunday":      price = 22.50;
                    break;
            }
            break;
    }

    total += groupCount * price;

    if(groupType === "Students" && groupCount >= 30) {
        total *= 0.85;
    } else if(groupType === "Business" && groupCount>= 100) {
        total -= (10 * price);
    } else if(groupType === "Regular" && (groupCount >= 10 && groupCount <= 20)) {
        total *= 0.95;
    }

    console.log(`Total price: ${total.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");