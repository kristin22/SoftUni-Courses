function room(input) {
    let month = input[0];
    let nights = Number(input[1]);

    let studioPrice = 0;
    let apartmentPrice = 0;
    
    if (month == "May" || month == "October") {
        studioPrice = 50;
        apartmentPrice = 65;
        if (nights > 7 && nights <= 14) {
            studioPrice *= 0.95;
        } else if (nights > 14) {
            studioPrice *= 0.70;
        }
    } else if (month == "June" || month == "September") {
        studioPrice = 75.20;
        apartmentPrice = 68.70;
        if (nights > 14) {
            studioPrice *= 0.80;
        }
    } else if (month == "July" || month == "August") {
        studioPrice = 76;
        apartmentPrice = 77;
    }

    if(nights > 14) {
        apartmentPrice *= 0.90;
    }

    console.log(`Apartment: ${(nights * apartmentPrice).toFixed(2)} lv.`);
    console.log(`Studio: ${(nights * studioPrice).toFixed(2)} lv.`);

}

room(["May", "15"]); 
room(["June", "14"]);