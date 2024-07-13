function townToJSON(arr) {
    const [,town, lat, lng,] = arr.shift().split(/[ ]?\|[ ]?/);
    let result = arr.map(line => { return line.split(/[ ]?\|[ ]?/)
                    .filter(w => w.length > 0)})
                    .reduce((acc, line) => {
                        let currObj = {};
                        currObj[town] = line[0];
                        currObj[lat] = Math.round(+line[1] * 100) / 100;
                        currObj[lng] = Math.round(+line[2] * 100) / 100;
                        acc.push(currObj);
                        return acc;
                    }, []);

    return JSON.stringify(result);
}

console.log(townToJSON(['| Town | Latitude | Longitude |',
                       '| Sofia | 42.696552 | 23.32601 |',
                       '| Beijing | 39.913818 | 116.363625 |']));

console.log(townToJSON(['| Town | Latitude | Longitude |',
                       '| Veliko Turnovo | 43.0757 | 25.6172 |',
                       '| Monatevideo | 34.50 | 56.11 |']));