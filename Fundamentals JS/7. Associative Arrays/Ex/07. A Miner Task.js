function minerTask(input) {
    let resources = {};

    while (input.length !== 0) {

        // check if we have that resource in the obj
        let currResource = input.shift();
        if (!resources.hasOwnProperty(currResource)) {
            resources[currResource] = 0;
        }
        resources[currResource] += Number(input.shift());

    }

    resources = Object.entries(resources).forEach((x) => { console.log(`${x[0]} -> ${x[1]}`)})

}

minerTask(['Gold', '155',
           'Silver', '10',
           'Copper', '17']);

minerTask([ 'gold', '155',
            'silver', '10',
            'copper', '17',
            'gold', '15']);