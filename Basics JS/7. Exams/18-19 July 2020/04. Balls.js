function balls(input) {
    let ballsCount = Number(input[0]);
    
    let colour = "";
    let points = 0;
    let red = 0, orange = 0, yellow = 0, white = 0, black =  0, other = 0;

    for(let currBall = 1; currBall <= ballsCount; currBall++) {
        colour = input[currBall];
        switch (colour) {
            case "red":
                points += 5; 
                red++;               
                break;
            case "orange":   
                points += 10;
                orange++;             
                break;
            case "yellow":
                points += 15;  
                yellow++;              
                break;
            case "white":  
                points += 20; 
                white++;             
                break;
            case "black":  
                points = Math.floor(points / 2);
                black++;             
                break;
            default:
                other++;

        }
    }

    console.log(`Total points: ${points}`)
    console.log(`Red balls: ${red}`)
    console.log(`Orange balls: ${orange}`)
    console.log(`Yellow balls: ${yellow}`)
    console.log(`White balls: ${white}`)
    console.log(`Other colors picked: ${other}`)
    console.log(`Divides from black balls: ${black}`)

}

balls(["3",
"white",
"black",
"pink"]);

balls(["5",
"red",
"red",
"ddd",
"ddd",
"ddd"]);