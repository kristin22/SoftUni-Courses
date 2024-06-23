function tankVolume(input) {    
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let tankVolume = length * width * height;
    tankVolume /= 1000;

    let neededWather = tankVolume * (1 - (percent/100));
    console.log(neededWather);
}

// tankVolume(["85", "75","47","17"]);
tankVolume(["105", "77", "89", "18.5"]);