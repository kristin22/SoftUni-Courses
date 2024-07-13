function carFactory(obj) {
    const car = {
        model: obj.model,
        engine: { power: 0, volume: 0 },
        carriage: { type: obj.carriage, color: obj.color },
        wheels: [0, 0, 0, 0]
    }
    const engines = [ { power: 90, volume: 1800 },
                            { power: 120, volume: 2400 },
                            { power: 200, volume: 3500 },];

    (obj.power <= 90) ? car.engine = engines[0]
    : (obj.power <= 120) ? car.engine = engines[1]
    : (obj.power <= 200) ? car.engine = engines[2]
    : null;

    obj.wheelsize % 2 === 0 ? car.wheels.fill(--obj.wheelsize)
    : car.wheels.fill(obj.wheelsize);

    return car;
}

console.log(carFactory({ model: 'VW Golf II',
                        power: 90,
                        color: 'blue',
                        carriage: 'hatchback',
                        wheelsize: 14 }));

console.log(carFactory({ model: 'Opel Vectra',
                        power: 110,
                        color: 'grey',
                        carriage: 'coupe',
                        wheelsize: 17 }));