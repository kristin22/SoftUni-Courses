function voucher(input) {
    let money = Number(input[0]);
    
    let index = 1;
    command = input[index];

    let ticketCnt = 0, otherCnt = 0;

    while(command !== "End") {
        let n = command.length;
        let ticketSum = 0;

        if(n > 8) { // ticket
            ticketSum = command.charCodeAt(0) + command.charCodeAt(1);
            if(ticketSum > money) {
                break;
            }
            money -= ticketSum;
            ticketCnt++;
        } else {    // other
            ticketSum = command.charCodeAt(0);
            if(ticketSum > money) {
                break;
            }
            money -= ticketSum;
            otherCnt++;
        }

        index++;
        command = input[index];
    }

    console.log(ticketCnt + "\n" + otherCnt);
}

voucher(["300",
    "Captain Marvel",
    "popcorn",
    "Pepsi"]);

voucher(["1500",
"Avengers: Endgame",
"Bohemian Rhapsody",
"Deadpool 2",
"End"]);