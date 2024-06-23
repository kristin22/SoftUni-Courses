function partyTime(input) {    

    let partyList = {
        vip: [],
        regular: []
    }

    let arrived = input.splice(0, input.indexOf('PARTY'));
    input.shift();
    for(el of input) {
        let index = arrived.indexOf(el);
        if(index > -1) {
            arrived.splice(index, 1);
        }
    }
   
    for(el of arrived) {
        let code = el.charCodeAt(0)
        if(code >= 48 && code <= 57) {   // vip
            partyList.vip.push(el);
        } else {
            partyList.regular.push(el);
        }
    }

    console.log(partyList.vip.length + partyList.regular.length);
    Object.values(partyList).forEach(x => {
        for(el of x) {
            console.log(el);
        }
    });
    
}



partyTime(['7IK9Yo0h',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc',
        'tSzE5t0p',
        'PARTY',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc'
]);

partyTime(['m8rfQBvl',
        'fc1oZCE0',
        'UgffRkOn',
        '7ugX7bm0',
        '9CQBGUeJ',
        '2FQZT3uC',
        'dziNz78I',
        'mdSGyQCJ',
        'LjcVpmDL',
        'fPXNHpm1',
        'HTTbwRmM',
        'B5yTkMQi',
        '8N0FThqG',
        'xys2FYzn',
        'MDzcM9ZK',
        'PARTY',
        '2FQZT3uC',
        'dziNz78I',
        'mdSGyQCJ',
        'LjcVpmDL',
        'fPXNHpm1',
        'HTTbwRmM',
        'B5yTkMQi',
        '8N0FThqG',
        'm8rfQBvl',
        'fc1oZCE0',
        'UgffRkOn',
        '7ugX7bm0',
        '9CQBGUeJ'
]);



/* Alternative solution

function partyTime(input) {
    let partyList = { 
        "vip": [], 
        "regualer": [] 
    }

    let partyTime = input.splice(0, input.indexOf('PARTY'));

    input.splice(1, input.length - 1).map(x => {
        if (partyTime.includes(x))
            partyTime.splice(partyTime.indexOf(x), 1);
    });

    partyList['vip'] = partyList['vip'].concat(partyTime.filter(x => !isNaN(x[0])));

    partyList['regualer'] = partyList['regualer'].concat(partyTime.filter(x => isNaN(x[0])));

    console.log(partyList['vip'].length + partyList['regualer'].length);

    Object.keys(partyList).map(el => {
        if (partyList[el].length > 0) partyList[el].map(x => { console.log(x) })
    });

}

*/