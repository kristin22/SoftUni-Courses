function movieDay(input) {
    let time = Number(input[0]);
    let scenesCnt = Number(input[1]);
    let timePerScene = Number(input[2]);

    let totalTime = time * 0.15 + (scenesCnt * timePerScene);


    if (totalTime <= time) {
        console.log(`You managed to finish the movie on time! You have ${Math.round(time - totalTime)} minutes left!`);
    } else {
        console.log(`Time is up! To complete the movie you need ${Math.round(totalTime - time)} minutes.`);
    }
} 

movieDay(["120",
        "10",
        "11"]);

movieDay(["60",
        "15",
        "3"]);