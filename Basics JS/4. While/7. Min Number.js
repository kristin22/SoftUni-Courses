function maxNumber(arr) {
    let index = 0;
    let command = arr[index];
    let min = command;

    while (command != "Stop") {
        min = Number(min);  //  Преобразуваме го в число

        let value = Number(command);
        if (value < min) {
            min = value;
        }

        index++;
        command = arr[index];
    }

    console.log(min);
}

maxNumber(["100",
        "99",
        "80",
        "70",
        "Stop"]);
