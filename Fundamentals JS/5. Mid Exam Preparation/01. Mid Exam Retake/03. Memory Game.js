function memoryGame(arr) { // Not Done Yet
    let sequence = arr[0].split(" ");
    
    let moves = 0;

    let n = arr.length - 1;

    for(let i = 1; i < n; i++) {

        let indexes = arr[i].split(" ");
        indexes = indexes.map(Number);

        moves++;

        let firstIndex = indexes[0];
        let secondIndex = indexes[1];

        if ((firstIndex === secondIndex) || firstIndex < 0 || secondIndex < 0 || firstIndex > sequence.length - 1 || secondIndex > sequence.length - 1) {    // cheat check
            let mid = Math.floor(sequence.length / 2);

            // add two matching elements at the middle of sequence
            let addElement = "-" + moves + "a";
            sequence.splice(mid, 0, addElement, addElement);


            console.log("Invalid input! Adding additional elements to the board");
        } else if (sequence[firstIndex] === sequence[secondIndex]) {  // hits 2 matching elements
            // remove the 2 elements
            console.log(`Congrats! You have found matching elements - ${sequence[firstIndex]}!`);

            sequence.splice(firstIndex, 1);

            if(firstIndex < secondIndex) {
                sequence.splice(secondIndex - 1, 1);
            } else {
                sequence.splice(secondIndex, 1);
            }

        } else if (sequence[firstIndex] !== sequence[secondIndex]) {  // hits 2 different elements
            console.log("Try again!");
        }
        
        if (sequence.length === 0) {
            console.log(`You have won in ${moves} turns!`);
            return;
        }
        
    }

    if (sequence.length > 0) {
        console.log("Sorry you lose :(");
        console.log(sequence.join(" "));
    }
}

memoryGame( ["1 1 2 2 3 3 4 4 5 5", 
            "1 0",
            "-1 0",
            "1 0", 
            "1 0", 
            "1 0", 
            "end"]);

memoryGame(["a 2 4 a 2 4", 
            "0 3", 
            "0 2",
            "0 1",
            "0 1", 
            "end"]);

memoryGame(["a 2 4 a 2 4", 
            "4 0", 
            "0 2",
            "0 1",
            "0 1", 
            "end"]);