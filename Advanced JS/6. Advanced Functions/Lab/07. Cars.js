function cars(input) {
    const carFactory = (function() {
        return {
            create  (name) { carFactory[name] = {} },
            inherit (name, value) { carFactory[name] = Object.create(carFactory[value]) },
            set (name, key, value) { carFactory[name][key] = value },
            print (name) {
                const result = [];
                for (const key in carFactory[name]) {
                    result.push(`${key}:${carFactory[name][key]}`);
                }
                console.log(result.join(','));
            }
        };
    })();

    input.forEach(line => {
        const [command, name, key, value] = line.split(' ');
        
        (command === 'create' && key === 'inherit') 
            ? carFactory.inherit(name, value)
            : (command === 'create')                    
                ? carFactory.create(name)
                : (command === 'set')                       
                    ? carFactory.set(name, key, value)
                    : carFactory.print(name)
    }) 
}

cars(['create c1',
                'create c2 inherit c1',
                'set c1 color red',
                'set c2 model new',
                'print c1',
                'print c2'])

// Alternative:
/* function cars(arr) {
    const car = carFactory();

    arr.forEach(line => {
        const [command, name, keyOrCommand, value] = line.split(' ');

        (command === 'create' && keyOrCommand === 'inherit')
            ? car.inherit(name, value)
            : (command === 'create') ? car.create(name)
            : (command === 'set') ? car.set(name, keyOrCommand, value)
            : (car.print(name));
    });

    function carFactory() {
        const carStore = {
            create(name) { carStore[name] = {}; },
            inherit(name, parent) { carStore[name] = Object.create(carStore[parent]); },
            set(name, key, value) { carStore[name][key] = value; },
            print(name) {
                const res = [];
                for (const key in carStore[name]) {
                    res.push(`${key}:${carStore[name][key]}`);
                }
                console.log(res.join(','));
            }
        };
        return carStore;
    }
} */

/* cars([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]); */
                