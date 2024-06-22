function circleArea(radius) {

    if (typeof radius !== 'number') {
        return `We can not calculate the circle area, because we receive a ${typeof radius}.`
    } 

    return (Math.PI * Math.pow(radius, 2)).toFixed(2);
}

console.log(circleArea(5));
console.log(circleArea('name'));