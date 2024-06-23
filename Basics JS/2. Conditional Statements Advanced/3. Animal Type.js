function animalClass(input) {
    let animal = input[0];

    let isMammal = animal == "dog";
    let isReptile = animal == "crocodile" || animal == "tortoise" || animal == "snake";

    if (isMammal) {
        console.log("mammal");
    } else if (isReptile) {
        console.log("reptile");
    } else {
        console.log("unknown");
    } 
}

animalClass(["dog"]);
animalClass(["snake"]);
animalClass(["cat"]);