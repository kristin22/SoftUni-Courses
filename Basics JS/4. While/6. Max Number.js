function maxNumber(arr) {
    let index = 0;
    let command = arr[index];
    let max = command;

    while (command != "Stop") {
        max = Number(max);  //  Преобразуваме го в число

        let value = Number(command);
        if (value > max) {
            max = value;
        }

        index++;
        command = arr[index];
    }

    console.log(max);
}

maxNumber(["100",
        "99",
        "80",
        "70",
        "Stop"]);
