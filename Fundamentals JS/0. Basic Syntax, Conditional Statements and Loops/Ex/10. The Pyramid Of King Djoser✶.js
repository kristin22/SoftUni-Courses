function pyramid(base, increment) {     // 80/100
 
    let index = 1;
    
    let total = base * base;
    let innerWL = base - 2;       

    let innerTotal = innerWL * innerWL;    // made out of stone
    let outerTotal = total - innerTotal;          // marble or lapisLazuli 
   
    let totalStone = innerTotal;
    let totalMarbel = outerTotal;
    let totalLapisLazuli = 0;
    let gold = 0;

    let starts = (Math.ceil( base / 2)) - 1;

    for(let curr = starts; curr >= 1; curr--) {
        index++;
        base -= 2;
        total = base * base;
        innerWL = base - 2; 

        if (curr != 1) {
            innerTotal = innerWL * innerWL
            outerTotal = total - innerTotal;             // marble or lapisLazuli 
    
            totalStone += innerTotal;
        }

        if (curr == 1) {
            gold += total;
            break;
        } else if (index % 5 == 0) {
            totalLapisLazuli += outerTotal;
        } else {
            totalMarbel += outerTotal;
        }
    }

    totalStone = Math.ceil(totalStone * increment);
    totalMarbel = Math.ceil(totalMarbel * increment);
    totalLapisLazuli = Math.ceil(totalLapisLazuli * increment);
    gold = Math.ceil(gold * increment);

    let height = Math.floor(index * increment);

    console.log(`Stone required: ${totalStone}`);
    console.log(`Marble required: ${totalMarbel}`);
    console.log(`Lapis Lazuli required: ${totalLapisLazuli}`);
    console.log(`Gold required: ${gold}`);
    console.log(`Final pyramid height: ${height}`);


}

pyramid(11, 0.75);

/*


function pyramid(base, increment) {
 
    let totalstone = 0;
    let totalmarble = 0;
    let totallapis = 0;
    let totalgold = 0;
    let row = 0;
    let currentbase = base;
 
    while (currentbase > 2) {
     let marbel = currentbase*4-4;
     let stone=currentbase*currentbase-marbel;
        totalstone+=stone;
 
        row++;
        if(row%5===0){
            totallapis+=marbel;
        }else{
            totalmarble+=marbel;
        }
        currentbase-=2;
    }
    row++;
    let gold=currentbase*currentbase;
 
    stone = Math.ceil(totalstone * increment);
    marble = Math.ceil(totalmarble * increment);
    lapis = Math.ceil(totallapis * increment);
    totalgold = Math.ceil(gold * increment);
    totalHeight = Math.floor(row*increment);
 
    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapis}`);
    console.log(`Gold required: ${totalgold}`);
    console.log(`Final pyramid height: ${totalHeight}`);
 
}
pyramid(11,0.75)



*/