function previousDay(year, month, day) {

    let prevDay = new Date(year, month - 1, day - 1);

    return `${prevDay.getFullYear()}-${prevDay.getMonth() + 1}-${prevDay.getDate()}`;
}

console.log(previousDay(2016, 9, 30));
console.log(previousDay(2015, 5, 10));

