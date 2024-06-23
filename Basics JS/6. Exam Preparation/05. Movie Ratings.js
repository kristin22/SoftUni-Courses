function rating(input) {
    let n = Number(input[0]);

    let maxMovie = "";
    let maxRate = 0;
    let minMovie = "";
    let minRate = 0;
    let sum = 0;

    for (let index = 1; index <= n * 2; index++) {
        let movie = input[index];
        index++;
        let rate = Number(input[index]);
        sum += rate;

        if (index === 2) {
            maxMovie = movie;
            maxRate = rate;
            minMovie = movie;
            minRate = rate;

        }
        if (rate > maxRate) {
            maxRate = rate;
            maxMovie = movie;
        }
        if (rate < minRate) {
            minRate = rate;
            minMovie = movie;
        }
    }

    console.log(`${maxMovie} is with highest rating: ${maxRate.toFixed(1)}`);
    console.log(`${minMovie} is with lowest rating: ${minRate.toFixed(1)}`);
    console.log(`Average rating: ${(sum / n).toFixed(1)}`);


}


rating([5,
        "A Star is Born",
        7.8,
        "Creed 2",
        7.3,
        "Mary Poppins",
        7.2,
        "Vice",
        7.2,
        "Captain Marvel",
        7.1]);