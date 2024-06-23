function skeleton(input) {
    let controlMinutes = Number(input[0]);
    let controlSeconds = Number(input[1]);
    let runwayLength = Number(input[2]);
    let secondsPer100m = Number(input[3]);

    let controlSum = controlMinutes * 60 + controlSeconds;
    let decrecedTime = (runwayLength / 120) * 2.5;
    let hisTime = (runwayLength / 100) * secondsPer100m - decrecedTime;

    if(hisTime <= controlSum) {
        console.log("Marin Bangiev won an Olympic quota!");
        console.log(`His time is ${hisTime.toFixed(3)}.`);
    } else {
        console.log(`No, Marin failed! He was ${(hisTime - controlSum).toFixed(3)} second slower.`);
    }

}

skeleton(["2",
        "12",
        "1200",
        "10"]);

skeleton(["1",
        "20",
        "1546",
        "12"]);