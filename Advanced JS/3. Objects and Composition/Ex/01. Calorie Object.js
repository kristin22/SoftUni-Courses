function calorieObject(arr) {
    return arr.reduce((acc, v, i) => {
        if(i % 2 === 0) { acc[v] = +arr[i+1]; };
        return acc;
    }, {});
}

console.log(calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
console.log(calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));