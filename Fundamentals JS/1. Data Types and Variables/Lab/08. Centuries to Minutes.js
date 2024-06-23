
function centuriesInMinutes(centuries) {
    let daysIn1year = 365.2422;

    let years = centuries * 100;
    let days = Math.floor(years * daysIn1year);     // you can also use: Math.trunc()
    let hours = days * 24;
    let minutes = hours * 60;

    console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}

centuriesInMinutes(1);
centuriesInMinutes(5);