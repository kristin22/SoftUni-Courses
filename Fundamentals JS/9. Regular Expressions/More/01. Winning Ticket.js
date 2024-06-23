function winningTickets(tickets) {
tickets = tickets.split(/\s*\,\s+/g);

    tickets.forEach(ticket => {
        let matched = ticket.match(/[@#$\^]{6,10}/g);

        if (ticket.length !== 20) {
            console.log(`invalid ticket`);
        } else if (!matched) {
            console.log(`ticket "${ticket}" - no match`);
        } else if (matched) {
            if (matched[0] === matched[1] && (matched[0].length >= 6 && matched[0].length <= 9)) {
                console.log(`ticket "${ticket}" - ${matched[0].length}${matched[0][1]}`);
            } else if (matched[0] === matched[1] && (matched[0].length === 10)) {
                console.log(`ticket "${ticket}" - ${matched[0].length}${matched[0][1]} Jackpot!`);
            }
        } 
    });

}

// winningTickets("Cash$$$$$$Ca$$$$$$sh");
// winningTickets("$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey");
winningTickets("$$$$$$$$$$$$$$$$$$$$   ,   aabb  ,     th@@@@@@eemo@@@@@@ey");
// winningTickets("validticketnomatch:(");