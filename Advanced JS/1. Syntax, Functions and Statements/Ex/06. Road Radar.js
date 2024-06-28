function roadRadar(speed, area) {
    let limits = {
        "motorway": 130,
        "interstate": 90,
        "city": 50,
        "residential": 20, 
    }

    let maxSpeed = limits[area];


    if (speed <= maxSpeed) {
        return `Driving ${speed} km/h in a ${maxSpeed} zone`;
    } else {
        let msg = "";
        if (maxSpeed < speed && speed <= maxSpeed + 20) {
            msg = "speeding";
        } else if (maxSpeed < speed && speed <= maxSpeed + 40) {
            msg = "excessive speeding";
        } else {
            msg = "reckless driving";
        }

        return `The speed is ${speed - maxSpeed} km/h faster than the allowed speed of ${maxSpeed} - ${msg}`
    }

}

console.log(roadRadar(40, 'city'));
console.log(roadRadar(21, 'residential'));
console.log(roadRadar(120, 'interstate'));
console.log(roadRadar(200, 'motorway'));