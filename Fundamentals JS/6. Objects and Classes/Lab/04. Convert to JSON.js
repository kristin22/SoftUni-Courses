function convertToJSON(name, lastName, hairColor) {

    let obj = {
        name: name,
        lastName: lastName,
        hairColor: hairColor,
    };

    let json = JSON.stringify(obj);
    console.log(json);
}

convertToJSON('George', 'Jones', 'Brown');
convertToJSON('Peter', 'Smith', 'Blond');