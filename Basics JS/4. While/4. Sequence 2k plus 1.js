function sequence(arr) {
    let number = Number(arr[0]);

    let currNum = 1;
    while (currNum <= number) {
        console.log(currNum);
        currNum = currNum * 2 + 1;
    }
}

sequence(["3"]);
sequence(["8"]);