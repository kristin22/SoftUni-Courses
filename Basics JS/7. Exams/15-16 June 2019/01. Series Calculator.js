function seriesCalc(input) {
    let seriesName = input[0];
    let seasonsCnt = Number(input[1]);
    let episodesCnt = Number(input[2]);
    let episodeTime = Number(input[3]);

    let totalTime = (episodeTime * 1.2) * episodesCnt * seasonsCnt + seasonsCnt * 10;

    console.log(`Total time needed to watch the ${seriesName} series is ${totalTime} minutes.`);
}

seriesCalc(["Lucifer",
            "3",
            "18",
            "55"]);

seriesCalc(["Game of Thrones",
            "7",
            "10",
            "50"]);

seriesCalc(["Riverdale",
            "3",
            "21",
            "45"]);