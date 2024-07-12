function createAssemblyLine() {
    return {
        hasClima(car) {
            car.temp =  21;
            car.tempSettings =  21;
            car.adjustTemp = function() {
                (car.temp < car.tempSettings) ? car.temp++
                : (car.temp > car.tempSettings) ? car.temp-- : null;
            }
        },

        hasAudio(car) {
            car.currentTrack = {
                name: null,
                artist: null
            };
            car.nowPlaying = function() {
                console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}` );
            };
        },

        hasParktronic(car) {
            car.checkDistance = function(distance) {
               (distance < 0.1) ? console.log('Beep! Beep! Beep!')
                : (distance < 0.25) ? console.log('Beep! Beep!')
                : (distance < 0.5) ? console.log('Beep!')
                : console.log('');
            }
        }
    };

}


const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};


assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);


assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();


assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);


console.log(myCar);
