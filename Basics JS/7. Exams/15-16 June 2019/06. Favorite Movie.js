function favMovie(input) {
  let command = input[0];
  let index = 0;

  let bestMovie = "";
  let bestPoints = 0;
  let movieCount = 0; // max 7 movies

  /*
        var str = "A";
        var n = str.charCodeAt(0);
        console.log(n);   // 65
        console.log(`${String.fromCharCode(n)}`);   // A
    
    */

  while (command != "STOP") {
    let currPoints = 0;
    movieCount++;

    for (let i = 0; i < command.length; i++) {
      let currN = command.charCodeAt(i);
      currPoints += currN;

      if (currN >= 97 && currN <= 122) {
        // малка буква 97 - 122
        currPoints -= 2 * currN.length;
      } else if (currN >= 65 && currN <= 90) {
        // главна буква 65 - 90
        currPoints -= currN.length;
      }
    }

    if (currPoints > bestMovie) {
      bestMovie = command;
      bestPoints = currPoints;
    }

    if (movieCount === 7) {
      break;
    }
    command = input[++index];
  }
}

// favMovie(["Matrix", "Breaking bad", "Legend", "STOP"]);

favMovie([
  "Wrong turn",
  "The maze",
  "Area 51",
  "Night Club",
  "Ice age",
  "Harry Potter",
  "Wizards",
]);
