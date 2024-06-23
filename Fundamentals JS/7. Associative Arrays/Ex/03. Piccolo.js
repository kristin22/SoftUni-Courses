function piccolo(input) {
    let carSet = new Set();

    for(let el of input) {
        let line = el.split(", ");
        let carNum = line[1];

        if(line[0] === "IN") {
            carSet.add(carNum);
        } else {
            carSet.delete(carNum);
        }
    }

    // To sort a set we first need to convert it to array and then we use .sort()
    let sortedArray = Array.from(carSet);
        sortedArray.sort();


    if (sortedArray.length === 0) {
        console.log("Parking Lot is Empty");
    } else {
        sortedArray.forEach(element => {
            console.log(element);
        });
    }
}

piccolo(['IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'IN, CA9999TT',
        'IN, CA2866HI',
        'OUT, CA1234TA',
        'IN, CA2844AA',
        'OUT, CA2866HI',
        'IN, CA9876HH',
        'IN, CA2822UU']);

piccolo(['IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'OUT, CA1234TA']);