function ticTacToe(arr) {
    let board = [[false, false, false], [false, false, false], [false, false, false]];

    for(let i = 0; i < arr.length; i++) {
        let [a, b] = arr[i].split(" ");
        if(!board[a][b]) {
            (i % 2 === 0) ? board[a][b] = "X" : board[a][b] = "O";
        } else {
            console.log("This place is already taken. Please choose another!");
        }
        
    }


}

ticTacToe(["0 1", "0 0", "0 2",  "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
ticTacToe(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);
ticTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);