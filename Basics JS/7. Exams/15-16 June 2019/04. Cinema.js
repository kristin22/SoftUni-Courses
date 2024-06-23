function cinema(input) {
    let capacity = Number(input[0]);

    let index = 1;
    let command = input[index];
    let seats = 0;
    let income = 0;

    while(command !== "Movie time!") {
        let currSeats = Number(command);
        seats += currSeats;

        if(seats > capacity) {
            break;
        }

        let currSum = currSeats * 5;
        if(currSeats % 3 === 0) {
            currSum -= 5;
        }
        income += currSum;

        index++;
        command = input[index];
    }

    if(command === "Movie time!") {
        console.log(`There are ${capacity - seats} seats left in the cinema.`);
    } else if(seats >= capacity) {
        console.log("The cinema is full.");
    }

    console.log(`Cinema income - ${income} lv.`);
}

cinema(["60",
        "10",
        "6",
        "3",
        "20",
        "15",
        "Movie time!"]);

cinema(["50",
        "15",
        "10",
        "10",
        "15",
        "5"]);

cinema(["100",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "Movie time!"]);