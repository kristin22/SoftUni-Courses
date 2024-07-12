function townPopulation(arr) {
    arr = arr.map(line => line.split(" <-> "));
    
    let towns = {}; 
    arr.forEach(el => towns[el[0]] = (towns[el[0]] || 0) + +el[1] );

    /* let towns = arr.map(line => line.split(" <-> ")).reduce((acc, el) => {
        acc[el[0]] = (acc[el[0]] || 0) + +el[1];
        return acc;
    }, {}); */

    let msg = "";
    
    for(el in towns) {
        msg += `${el} : ${towns[el]}\n`;
    }
    return msg.trim();
}

console.log(townPopulation(['Sofia <-> 1200000',
                            'Montana <-> 20000',
                            'New York <-> 10000000',
                            'Washington <-> 2345000',
                            'Las Vegas <-> 1000000']));

console.log(townPopulation(['Istanbul <-> 100000',
                            'Honk Kong <-> 2100004',
                            'Jerusalem <-> 2352344',
                            'Mexico City <-> 23401925',
                            'Istanbul <-> 1000']));

