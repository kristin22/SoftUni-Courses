function solution(area, vol, input) {

    return JSON.parse(input)
            .reduce((acc, currObj) => {
                acc.push( { area: area.call(currObj), volume: vol.call(currObj) } );
                return acc;
    }, []);
}

/* function anotherSolution(area, vol, input) {
    let arr = JSON.parse(input);

    function calc(obj) {
        return { area: area.call(obj), volume: vol.call(obj) };
    }
    
    return arr.map(calc);
} */

function area() {
    return Math.abs(this.x * this.y);
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
}

console.table(solution(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`));

console.table(solution(area, vol, `[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
    ]`
    ));


console.table(solution(area, vol, `[
        {"x":"1","y":"2","z":"10"},
        {"x":"7","y":"7","z":"10"},
        {"x":"5","y":"2","z":"10"}
        ]`));