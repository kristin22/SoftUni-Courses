function meetings(entries) {
    const week = {};

    for(const entry of entries) {
        const currEntry = entry.split(" ");
        let weekday = currEntry[0];
        let name = currEntry[1];

        // check if the meeting is successful
        // print a message

        if(week[weekday] === undefined) {  // obj.hasOwnProperty(prop);    or   developer.name !== undefined
            console.log(`Scheduled for ${weekday}`);
            week[weekday] = name;
        } else {
            console.log(`Conflict on ${weekday}!`);
        }
    }

    for (const day in week) {
        console.log(`${day} -> ${week[day]}`);
    }
}

meetings(['Monday Peter',
        'Wednesday Bill',
        'Monday Tim',
        'Friday Tim']);

meetings(['Friday Bob',
        'Saturday Ted',
        'Monday Bill',
        'Monday John',
        'Wednesday George']);