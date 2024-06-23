function password(arr) {
    let username = arr[0];
    let pass = arr[1];

    index = 2;
    let currPass = arr[index];
    while (currPass !== pass) {

        index++;
        currPass = arr[index];
    }

    if (currPass === pass) {
        console.log(`Welcome ${username}!`);
    }
}

password(["Nakov",
"1234",
"Pass",
"1324",
"1234"]);