function flightSchedule(input) {
    let fArr = input.shift();
    let flights = {};

    fArr.forEach(line => {
        let index = line.indexOf(" ");
        let flight = line.slice(0, index);
        let city = line.slice(index+1, line.length);
        
        let curr = {
            Destination: city,
            Status: 'Ready to fly'
        };

        flights[flight] = curr;
    });
    
    let statuses = input.shift();
    statuses.forEach(line => {
        line =  line.split(" ");

        if (flights.hasOwnProperty(line[0])) {
            flights[line[0]].Status = line[1];
        }

    })

    let fc = input.shift().join("");

    for(let flight in flights) {
        if (flights[flight].Status === fc) {
            console.log(`{ Destination: '${flights[flight].Destination}', Status: '${flights[flight].Status}' }`);
        }
    }

}

flightSchedule([['WN269 Delaware',
                 'FL2269 Oregon',
                 'WN498 Las Vegas',
                 'WN3145 Ohio',
                 'WN612 Alabama',
                 'WN4010 New York',
                 'WN1173 California',
                 'DL2120 Texas',
                 'KL5744 Illinois',
                 'WN678 Pennsylvania'],

                ['DL2120 Cancelled',
                 'WN612 Cancelled',
                 'WN1173 Cancelled',
                 'SK430 Cancelled'],

                ['Cancelled'] ]);
                
                console.log("====================");

flightSchedule([['WN269 Delaware',
                 'FL2269 Oregon',
                 'WN498 Las Vegas',
                 'WN3145 Ohio',
                 'WN612 Alabama',
                 'WN4010 New York',
                 'WN1173 California',
                 'DL2120 Texas',
                 'KL5744 Illinois',
                 'WN678 Pennsylvania'],

                ['DL2120 Cancelled',
                 'WN612 Cancelled',
                 'WN1173 Cancelled',
                 'SK330 Cancelled'],

                ['Ready to fly'] ]);