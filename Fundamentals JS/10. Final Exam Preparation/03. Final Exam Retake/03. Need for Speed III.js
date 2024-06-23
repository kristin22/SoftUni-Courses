function needSpeed(input) {   // 80/100
   let cars = {};

   let n = Number(input.shift());
   input.pop();

   for (let i = 0; i < n; i++) {
      let car = input.shift().split("|");
      cars[car[0]] = {
         mileage: Number(car[1]),
         fuel: Number(car[2])
      }
   }

   input.forEach(line => {
      line = line.split(" : ");
      if (line[0] === "Drive") {
         line.shift();
         let [car, distance, fuel] = line;
         
         if (cars[car].fuel < Number(fuel)) {
            console.log("Not enough fuel to make that ride");
         } else {
            cars[car].mileage += Number(distance);
            cars[car].fuel -= Number(fuel);
            console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
         }
         if (cars[car].mileage >= 100000) {
            delete cars[car];
            console.log(`Time to sell the ${car}!`);
         }
         
      } else if (line[0] === "Refuel") {
         line.shift();
         let [car, fuel] = line;
         if (Object.hasOwn(cars, car)) {
            if (cars[car].fuel + Number(fuel) > 75) {
               console.log(`${car} refueled with ${75 - cars[car].fuel} liters`);
               cars[car].fuel = 75;
            } else {
               console.log(`${car} refueled with ${Number(fuel)} liters`);
               cars[car].fuel += Number(fuel);
            }
         }
      } else if (line[0] === "Revert") {
         line.shift();
         let [car, kilometers] = line;

         cars[car].mileage -= Number(kilometers);

         if (cars[car].mileage < 10000) {
            cars[car].mileage = 10000;
         } else {
            console.log(`${car} mileage decreased by ${kilometers} kilometers`);
         }
      }
   });

   for(let [car, value] of Object.entries(cars)) {
      console.log(`${car} -> Mileage: ${value.mileage} kms, Fuel in the tank: ${value.fuel} lt.`);

   }
}

needSpeed(['3',
   'Audi A6|38000|62',
   'Mercedes CLS|11000|35',
   'Volkswagen Passat CC|45678|5',
   'Drive : Audi A6 : 543 : 47',
   'Drive : Mercedes CLS : 94 : 11',
   'Drive : Volkswagen Passat CC : 69 : 8',
   'Refuel : Audi A6 : 50',
   'Revert : Mercedes CLS : 500',
   'Revert : Audi A6 : 30000',
   'Stop']);

// needSpeed(['4',
//    'Lamborghini Veneno|11111|74',
//    'Bugatti Veyron|12345|67',
//    'Koenigsegg CCXR|67890|12',
//    'Aston Martin Valkryie|99900|50',
//    'Drive : Koenigsegg CCXR : 382 : 82',
//    'Drive : Aston Martin Valkryie : 99 : 23',
//    'Drive : Aston Martin Valkryie : 2 : 1',
//    'Refuel : Lamborghini Veneno : 40',
//    'Revert : Bugatti Veyron : 2000',
//    'Stop']);

