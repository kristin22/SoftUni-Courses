function retirement(input) {
    let gender = input[0];
    let age = Number(input[1]);
    let workYears = Number(input[2]);

    let mAge = 64;
    let mWorkYears = 38;

    let fAge = 61;
    let fWorkYears = 35;

    if (gender === "male") {
        if (age >= mAge && workYears >= mWorkYears) {
            console.log(`Ready to retire at ${age} and ${workYears} years of experience!`)
        }  else if (age < mAge && workYears >= mWorkYears) {
            console.log(`Worked enough, but not old enough. Years left to retirement: ${mAge - age}.`);
        } else if (age > mAge && workYears < mWorkYears) {
            console.log(`Old enough, but haven't worked enough. Work experience left to retirement: {разликата между искания стаж и стажа на потребителя}.`);
        } else if ( age < mAge && workYears <= mWorkYears) {
            console.log(`Too early. Years left to retirement: ${age - mAge}. Work experience left to retirement: ${workYears - mWorkYears}.`);
        }
    } else if (gender === "female") {
        if (age >= fAge && workYears >= fWorkYears) {
            console.log(`Ready to retire at ${age} and ${workYears} years of experience!`)
        } else if (age < fAge && workYears >= fWorkYears) {
            console.log(`Worked enough, but not old enough. Years left to retirement: ${fAge - age}.`);
        } else if (age > fAge && workYears < fWorkYears) {
            console.log(`Old enough, but haven't worked enough. Work experience left to retirement: {разликата между искания стаж и стажа на потребителя}.`);
        } else if ( age < fAge && workYears <= fWorkYears) {
            console.log(`Too early. Years left to retirement: ${age - fAge}. Work experience left to retirement: ${workYears - fWorkYears}.`);
        }
    } else {
        console.log("Invalid input.");
    }
}

retirement(["male", "63", "40"]);
retirement(["female", "63", "36"]);
retirement(["apache helicopter", "70", "45"]);