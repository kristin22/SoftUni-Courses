function trekking(input) {
    let groupsCount = Number(input[0]);
    let index = 0;
    
    let currPeople = 0;
    let totalPeople = 0;
    let musala = 0, monblan = 0, kilimanjaro = 0, k2 = 0, everest = 0;

    for(let i = 1; i <= groupsCount; i++) {
        currPeople = Number(input[++index]);
        totalPeople += currPeople;

        if(currPeople <= 5) {
            musala += currPeople;
        } else if(currPeople >= 6 && currPeople <= 12) {
            monblan += currPeople;
        } else if(currPeople >= 13 && currPeople <= 25) {
            kilimanjaro += currPeople;
        } else if(currPeople >= 26 && currPeople <= 40) {
            k2 += currPeople;
        } else if(currPeople >= 41) {
            everest += currPeople;
        }
    }

    console.log(`${(musala / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(monblan / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(kilimanjaro / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(k2 / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(everest / totalPeople * 100).toFixed(2)}%`);
}

trekking(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"]);