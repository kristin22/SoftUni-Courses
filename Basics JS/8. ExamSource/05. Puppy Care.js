function puppyCare(input) {
    let food = Number(input[0]) * 1000;

    let index = 1;
    let command = input[1];
    let totalAta = 0;

    while (command !== "Adopted") {
        totalAta += Number(command);

        command = input[++index];
    }

    if (totalAta <= food) {
        console.log(`Food is enough! Leftovers: ${food - totalAta} grams.`);
    } else if (totalAta > food) {
        console.log(`Food is not enough. You need ${totalAta - food} grams more.`);
    }
}

puppyCare(["4",
"130",
"345",
"400",
"180",
"230",
"120",
"Adopted"]);

puppyCare(["3",
"1000",
"1000",
"1000",
"Adopted"]);

puppyCare(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"]);
