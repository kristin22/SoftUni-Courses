function tickets(input) {
    let movie = input[0];
    let seatsCount = 0;

    let index = 0;
    let command = "";
    let totalSold = 0;
    let student = 0, standard = 0, kid = 0; 

    while(movie !== "Finish") {
        seatsCount = Number(input[++index]);
        let currSold = 0;

        for(let i = 1; i <= seatsCount; i++) {
            command = input[++index];
            if(command === "End") {
                break;
            }
            currSold++;
            if(command === "student") {
                student++;
            } else if(command === "standard") {
                standard++;
            } else if(command === "kid") {
                kid++;
            }
        }

        console.log(`${movie} - ${(currSold / seatsCount * 100).toFixed(2)}% full.`);

        movie = input[++index];
    }

    totalSold += (standard + student + kid);

    console.log(`Total tickets: ${totalSold}`);
    console.log(`${(student / totalSold * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standard / totalSold * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kid / totalSold * 100).toFixed(2)}% kids tickets.`);

}

tickets(["Taxi",
        "10",
        "standard",
        "kid",
        "student",
        "student",
        "standard",
        "standard",
        "End",
        "Scary Movie",
        "6",
        "student",
        "student",
        "student",
        "student",
        "student",
        "student",
        "Finish"]);

tickets(["The Matrix",
        "20",
        "student",
        "standard",
        "kid",
        "kid",
        "student",
        "student",
        "standard",
        "student",
        "End",
        "The Green Mile",
        "17",
        "student",
        "standard",
        "standard",
        "student",
        "standard",
        "student",
        "End",
        "Amadeus",
        "3",
        "standard",
        "standard",
        "standard",
        "Finish"]);


/* // Error code

    let movie = input[0];
    let seats = Number(input[1]);

    let index = 0;

    let studentsCnt = 0, standardCnt = 0, kidsCnt = 0;

    while(movie !== "Finish") {
        let currSum = 0;

        for(let i = 1; i <= seats; i++) {
            let command = input[index];

            if(command === "End") {
                break;
            }

            if(command === "student") {
                studentsCnt++;
            } else if(command === "standard") {
                standardCnt++;
            } else if(command === "kid") {
                kidsCnt++;
            }

            index++;
        }

        index++;
        
        currSum = studentsCnt + standardCnt + kidsCnt;
        console.log(`${movie} - ${(currSum * seats).toFixed(2)}`);

        movie = input[index];
        seats = Number(input[index + 1]);
        index += 2;
    }

*/