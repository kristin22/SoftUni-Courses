function tickets(input) {  

    let index = 0;
    let movie = input[index];
    let freeSpaces = 0;
    let type = "";
    let totalTickets = 0;
    let studentCnt = 0, standardCnt = 0, kidCnt = 0;


    while (movie !== "Finish") {
        freeSpaces = Number(input[++index]);
        let cnt = 0;

        for(let i = 1; i <= freeSpaces; i++) {
            type = input[++index];
            if (type === "End") {
                console.log(`${movie} - ${(cnt / freeSpaces * 100).toFixed(2)}% full.`);
                break;
            } else if (type === "student") {
                cnt++;
                studentCnt++;
            } else if (type === "standard") {
                cnt++;
                standardCnt++;
            } else if (type === "kid") {
                cnt++;
                kidCnt++;
            }
        }

        totalTickets += cnt;
        if (cnt === freeSpaces) {
            console.log(`${movie} - ${(cnt / freeSpaces * 100).toFixed(2)}% full.`);
        }

        movie = input[++index];
    }

    if (movie === "Finish") {
        console.log(`Total tickets: ${totalTickets}`);
        console.log(`${(studentCnt / totalTickets * 100).toFixed(2)}% student tickets.`);
        console.log(`${(standardCnt / totalTickets * 100).toFixed(2)}% standard tickets.`);
        console.log(`${(kidCnt / totalTickets * 100).toFixed(2)}% kids tickets.`);
    }

}

// tickets(["Taxi",
//         "10",
//         "standard",
//         "kid",
//         "student",
//         "student",
//         "standard",
//         "standard",
//         "End",
//         "Scary Movie",
//         "6",
//         "student",
//         "student",
//         "student",
//         "student",
//         "student",
//         "student",
//         "Finish"]);

// tickets(["The Matrix",
//         "20",
//         "student",
//         "standard",
//         "kid",
//         "kid",
//         "student",
//         "student",
//         "standard",
//         "student",
//         "End",
//         "The Green Mile",
//         "17",
//         "student",
//         "standard",
//         "standard",
//         "student",
//         "standard",
//         "student",
//         "End",
//         "Amadeus",
//         "3",
//         "standard",
//         "standard",
//         "standard",
//        "Finish"]);

tickets(["Taxi",
            10,
            "standard",
            "kid",
            "student",
            "student",
            "standard",
            "standard",
            "End",
            "Scary Movie",
            6,
            'student',
            "student",
            "student",
            "student",
            "student",
            "student",
            "Finish"]);