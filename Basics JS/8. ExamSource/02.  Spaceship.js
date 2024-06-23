function spaceship(input) {
    let w = Number(input[0]);
    let l = Number(input[1]);
    let h = Number(input[2]);
    let avrgHeight = Number(input[3]);

    let rocketVolume = w * l * h;
    let roomVolume = (avrgHeight + 0.4) * 2 * 2;

    let count = Math.floor(rocketVolume / roomVolume);
    if (count >= 3 && count <= 10) {
        console.log(`The spacecraft holds ${count} astronauts.`);
    } else if (count < 3) {
        console.log( "The spacecraft is too small.");
    } else if ( count > 10) {
        console.log("The spacecraft is too big.");
    }
}

spaceship(["3.5",
"4",
"5",
"1.70"]);

spaceship(["4.5",
"4.8",
"5",
"1.75"]);

spaceship(["3",
"3", 
"4",
"1.68"]);