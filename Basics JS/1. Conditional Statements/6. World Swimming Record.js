function swimRecord(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timeInSecsPer1M = Number(input[2]);
    
    let totalTime = distance * timeInSecsPer1M; 
    let addTime = (Math.floor(distance / 15)) * 12.5;
    totalTime += addTime;

    if(totalTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(totalTime - record).toFixed(2)} seconds slower.`);
    }

}

swimRecord(["10464", "1500", "20"]);
swimRecord(["55555.67", "3017", "5.03"]);
