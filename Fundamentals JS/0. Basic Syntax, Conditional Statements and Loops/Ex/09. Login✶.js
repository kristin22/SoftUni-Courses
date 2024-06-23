function login(input) {
    let username = input.shift();
    let password = username.split('').reverse().join('');

    let fails = 0;

    let currPass = input.shift();
    while(currPass !== password && input) {
        fails++;
        if(fails > 3) {
            console.log(`User ${username} blocked!`);
            return;
        }
        console.log('Incorrect password. Try again.');

        currPass = input.shift();
    }

    if(currPass === password) {
        console.log(`User ${username} logged in.`);
    }


}

login(['Acer','login','go','let me in','recA']);
login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny']);