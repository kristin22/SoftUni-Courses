function addressBook(entries) {
    let people = {};

    for (const i of entries) {
        const currEntry = i.split(":");
        const name = currEntry[0];
        const address = currEntry[1];

        people[name] = address;

    }

    // Object.entries() => To convert the enumerable string-keyed properties of an object to an array.

    let sorted = Object.entries(people).sort();
    for (i of sorted) {
        console.log(`${i[0]} -> ${i[1]}`);
    }
}

addressBook(['Tim:Doe Crossing',
            'Bill:Nelson Place',
            'Peter:Carlyle Ave',
            'Bill:Ornery Rd']);

addressBook(['Bob:Huxley Rd',
            'John:Milwaukee Crossing',
            'Peter:Fordem Ave',
            'Bob:Redwing Ave',
            'George:Mesta Crossing',
            'Ted:Gateway Way',
            'Bill:Gateway Way',
            'John:Grover Rd',
            'Peter:Huxley Rd',
            'Jeff:Gateway Way',
            'Jeff:Huxley Rd']);