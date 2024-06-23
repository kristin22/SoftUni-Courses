function bonusScore(input) {
    let points = Number(input[0]);
    let bonus = 0;
    let totalPoints = points;
 
    if(points > 1000) {
        bonus = 0.10 * points;
        totalPoints += bonus;
    } else if(points > 100) {
        bonus = 0.20 * points;
        totalPoints += bonus;
    } else {
        bonus = 5;
        totalPoints += bonus;
    } 
    if(points % 2 === 0 ) {
        bonus += 1;
        totalPoints += 1;
    }
    if(points % 10 === 5) {
        bonus += 2;
        totalPoints += 2;
    }

    console.log(bonus + "\n" + totalPoints);
}

bonusScore(["20"]);
bonusScore(["175"]);
bonusScore(["2703"]);
bonusScore(["15875"]);

/*  
    if(points <= 100) {

    } else if(points > 100 && points <= 1000) {

    } else if(points > 1000) {

    }
*/ 