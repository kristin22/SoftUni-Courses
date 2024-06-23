function oscars(input) {
    let actor = input[0];
    let totalPoints = Number(input[1]);
    let castCnt = Number(input[2]);

    let judge = "";
    let points = 0;
    for (let index = 3; index < input.length; index += 2) {
        judge = input[index];
        points = Number(input[index + 1]);
        totalPoints += (judge.length * points / 2);
        if (totalPoints > 1250.5) {
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
            return;
        }
    }

    console.log(`Sorry, ${actor} you need ${(1250.5 - totalPoints).toFixed(1)} more!`);
}

oscars([ "Zahari Baharov", "205", "4",
  "Johnny Depp",
  "45",
  "Will Smith",
  "29",
  "Jet Lee",
  "10",
  "Matthew Mcconaughey",
  "39" ]);
  
  oscars(["Sandra Bullock",
  "340",
  "5",
  "Robert De Niro",
  "50",
  "Julia Roberts",
  "40.5",
  "Daniel Day-Lewis",
  "39.4",
  "Nicolas Cage",
  "29.9",
  "Stoyanka Mutafova",
  "33"]);  
