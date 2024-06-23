function mapper(str) {
    let pattern = /([=\/])(?<place>[A-Z][a-zA-z]{2,})\1/g;
    let travelPoints = 0;
    let places = [];

    let matched = pattern.exec(str);  
    while(matched) {
        travelPoints += (matched.groups.place).length;
        places.push(matched.groups.place);

        matched = pattern.exec(str);
    }
    console.log(`Destinations: ${places.join(", ")}`);
    console.log(`Travel Points: ${travelPoints}`);
    
}

mapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");

mapper("ThisIs some InvalidInput");

/* Alternative:

function solve(string) {

    let stringToDo = string;
    let pattern = /([=\/])(?<place>[A-Z][A-Za-z]{2,})\1/g

    let match = pattern.exec(stringToDo);
    let sum = 0;
    let arrayPlace = []
    
    while (match) {

        let town = match.groups.place;
        sum += town.length
        arrayPlace.push(town)

        match = pattern.exec(stringToDo);
    }
    console.log(`Destinations: ${arrayPlace.join(', ')}`);
    console.log(`Travel Points: ${sum}`);
}

*/