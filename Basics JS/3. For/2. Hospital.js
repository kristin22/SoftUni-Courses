function hospital(input) {
let index = 0;
let period = Number(input[index]);
let doctors = 7;
let patients = 0;
let treated = 0;
let untreated = 0;

for(let i = 1; i <= period; i++) {
    if (i % 3 === 0 && untreated > treated) {
        doctors++;
    }
    index++;
    patients = Number(input[index]);
    if (patients <= doctors) {
        treated += patients;
    } else {
        treated += doctors;
        untreated += (patients - doctors);
    }

}

console.log(`Treated patients: ${treated}.`);
console.log(`Untreated patients: ${untreated}.`);
}

hospital([4, 7, 27, 9, 1]);
hospital([6, 25, 25, 25, 25, 25, 2]);