function theLift(arr) {
    let waiting = Number(arr[0]);

    let str = arr[1];
    let currState = str.split(" ");
    currState = currState.map(str => {
      return parseInt(str, 10);
    });

    for(let i = 0; i < currState.length; i++) {
        waiting += currState[i];
        currState[i] = 0;
    }


    let n = currState.length;
    let boarded = 0;

    let line = "";

    for(let i = 0; i < n; i++) {

        if (boarded < waiting) {
            if (waiting - boarded >= 4) {
                boarded += 4;
                line += "4 ";
            } else if (waiting - boarded >= 3) {
                boarded += 3;
                line += "3 ";
            } else if (waiting - boarded >= 2) {
                boarded += 2;
                line += "2 ";
            } else if (waiting - boarded >=1) {
                boarded += 1;
                line += "1 ";
            }
        }

    }

    let totalSpaces = n * 4;

    if(totalSpaces >= waiting) {
        console.log(`The lift has empty spots!`);
    }  else {

        console.log(`There isn't enough space! ${waiting - totalSpaces} people in a queue!`);
    }
    
    console.log(line);

}

theLift(["15", "0 0 0 0"]);
console.log("==================");
theLift(["20", "0 2 0"]);

