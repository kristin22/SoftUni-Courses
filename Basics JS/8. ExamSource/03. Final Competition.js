function finals(input) {
    let dancersCount = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let place = input[3];

    let total = 0;
    if(place === 'Bulgaria') {
        total = dancersCount * points;
    } else if(place === 'Abroad') {
        total = (dancersCount * points) * 1.5;
    }

    switch(season) {
        case 'summer':
            switch(place) {
                case 'Bulgaria':
                    total *= 0.95;
                    break;
                case 'Abroad':
                    total *= 0.90;
                    break;
            }
            break;
        case 'winter':
            switch(place) {
                case 'Bulgaria':
                    total *= 0.92;
                    break;
                case 'Abroad':
                    total *= 0.85;
                    break;
            }
            break;
    }

    let charityMoney = total * 0.75;
    total -= charityMoney;
    let dancerMoney = total / dancersCount;
    
    console.log(`Charity - ${charityMoney.toFixed(2)}`);
    console.log(`Money per dancer - ${dancerMoney.toFixed(2)}`);
}

finals(["1",
"89.5",
"summer",
"Abroad"]);

finals(["25",
"98",
"winter",
"Bulgaria"]);