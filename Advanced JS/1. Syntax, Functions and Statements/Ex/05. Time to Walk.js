function timeToWalk(steps, meters, kmh) {

    let distance = steps * meters / 1000;  // in km
    let breaks = (Math.floor(distance / 500)) * (60 * 60);    // in milliseconds
    let totalTime = (distance / kmh) * (Math.pow(60, 3)) + breaks;
 
    
    let date = new Date(totalTime);
    // date.setHours(0);
    // date.setTime(date.getTime() + totalTime);

    console.log(date);
    console.log(date);
    return totalTime;

}

console.log(timeToWalk(4000, 0.60, 5));
console.log(timeToWalk(2564, 0.70, 5.5));
