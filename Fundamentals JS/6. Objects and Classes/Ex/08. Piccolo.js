function piccolo(input) {
    let parkingLot = [];

    input.forEach(line => {
        line = line.split(", ");
        if (line[0] === "IN") {
            parkingLot.push(line[1]);
        } else {
            let index = parkingLot.includes(line[1]);
            if (index > -1) {
                parkingLot.splice(index, 1);
            }
        }
    });

    parkingLot.sort();

    if (parkingLot.length === 0) { console.log("Parking Lot is Empty"); return; }
    parkingLot.forEach(num => console.log(num));
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

console.log("================");

piccolo(['IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'OUT, CA1234TA']);