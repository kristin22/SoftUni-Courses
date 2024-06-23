function cardGame(input) {

    let  powers = { 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, 
                    J: 11, Q: 12, K: 13, A: 14, };

    let types = {S: 4, H: 3, D: 2, C: 1};

    let people = {};

    for (let line of input) {
        line = line.split(": ");
        
        let name = line.shift();
        line = line.toString().split(", ");

        if (people.hasOwnProperty(name) === false) {
            people[name] = [];
            people[name] = {
                cards: [],
                points: 0,
            };
        }
        
        for (let el of line) {
            if (people[name].cards.includes(el) === false) {
                people[name].cards.push(el);
            }
        }
        
    }

    // points sum
    for (let currName in people) {
        // console.log(currName);
        // console.log(people[currName].cards);
        // console.log(people[currName].points);

        (people[currName].cards).forEach(card => {
            card = card.split("");
            let type = card.pop();
            let power = card.join("");

            people[currName].points += powers[power] * types[type];
        });

        console.log(`${currName}: ${people[currName].points}`);
    }

}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);

cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]);