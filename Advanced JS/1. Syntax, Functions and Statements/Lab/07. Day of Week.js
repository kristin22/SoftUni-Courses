function dayOfWeek(name) {
    let week = {
        Monday: 1,
        Tuesday: 2,
        Wednesday: 3,
        Thursday: 4,
        Friday: 5,
        Saturday: 6,
        Sunday: 7,
    };

    return week.hasOwnProperty(name) ? week[name] : "error";
}

console.log(dayOfWeek('Monday'));
console.log(dayOfWeek('Friday'));
console.log(dayOfWeek('Invalid'));
