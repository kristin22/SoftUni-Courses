function raceFunc(input) {
    input.pop();
    let names = input.shift().split(", ");
    let racers = {};

    names.forEach(name => {
        racers[name] = 0;
    })

    input.forEach(line => {
        let name =  line.match(/[a-zA-Z]/g).join("");
        let pointsArr = line.match(/\d/g).map(Number);
        
        // Calculating the points:
        let total = 0;
        pointsArr.map( (num) => {total += num} );

        // Checking for the name and adding the points to it:
        if(racers.hasOwnProperty(name)) {  // Object.hasOwn(racers, `${name}` doesn't work in judge
            racers[name] += total;
        }
    });

    

    racers = Object.fromEntries(Object.entries(racers).sort((a, b) => b[1] - a[1]));

    let index = 1;
    for (let key of Object.keys(racers)) {
        let str = "";
        switch (index) {
            case 1: str = "st";    break;
            case 2: str = "nd";    break;
            case 3: str = "rd";    break;
        }

        console.log(`${index}${str} place: ${key}`);

        index++;
        if (index === 4) {
            return;
        }
    }
    
}

raceFunc(['George, Peter, Bill, Tom',
        'G4e@55or%6g6!68e!!@ ',
        'R1@!3a$y4456@',
        'B5@i@#123ll',
        'G@e54o$r6ge#',
        '7P%et^#e5346r',
        'T$o553m&6',
        'end of race']);

raceFunc(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
        'Mi*&^%$ch123o!#$%#nne787) ',
        '%$$B(*&&)i89ll)*&) ',
        'R**(on%^&ald992) ',
        'T(*^^%immy77) ',
        'Ma10**$#g0g0g0i0e',
        'end of race']);
