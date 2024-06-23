function numbersSum(arr) {
    let number = Number(arr[0]);

    let index  = 1;
    let currNum = Number(arr[index]);
    let sum = 0;

    while (true) {
        if (sum >= number) {
            console.log(sum);
            return;
        }
        sum += currNum;

        index ++;
        currNum = Number(arr[index]);
    }

}

numbersSum(["100",
        "10",
        "20",
        "30",
        "40"]);