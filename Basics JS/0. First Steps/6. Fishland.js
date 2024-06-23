function fishBill(input) {  
    let skumriyaLv = Number(input[0]);
    let tsatsaLv = Number(input[1]); 

    let palamudLv = 1.60 * skumriyaLv;
    let safridLv = 1.80 * tsatsaLv;
    let midiLv = 7.50;

    let palamudKg = input[2];
    let safridKg = input[3];
    let midiKg = input[4];

    let bill = palamudKg * palamudLv + safridKg * safridLv + midiKg * midiLv;
    console.log(bill.toFixed(2));
}

fishBill([6.90, 4.20, 1.5, 2.5, 1]);
fishBill([5.55, 3.57, 4.3, 3.6, 7]);