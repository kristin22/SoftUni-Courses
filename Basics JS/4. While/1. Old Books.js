function oldLibrary(arr) {
    let searchedBook = arr[0];

    let index = 1;
    let currBook = arr[index];
    let booksCnt = 1;

    while (currBook !== searchedBook && currBook !== "No More Books") {

        index++;
        currBook = arr[index];
        booksCnt++;

    }



    if (currBook === searchedBook) {
        console.log(`You checked ${booksCnt - 1} books and found it.`);
    } else if (currBook == "No More Books") {
        console.log("The book you search is not here!");
        console.log(`You checked ${booksCnt - 1} books.`);
    }

}

oldLibrary(["Troy",
"Stronger",
"Life Style",
"Troy"]);

oldLibrary(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"]);

oldLibrary(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"]);