function trekking(input) {
    let groupsCnt = Number(input[0]);
    let peopleCnt = 0;

    let allPeople = 0;
    let musalaPeople = 0;
    let monblanPeople = 0;
    let kilimanjaroPeople = 0;
    let k2People = 0;
    let everestPeople = 0;

    for(let group = 1; group <= groupsCnt; group++) {
        peopleCnt = Number(input[group]);
        if (peopleCnt <= 5) {
            musalaPeople += peopleCnt;        
        } else if (peopleCnt >= 6 && peopleCnt <= 12) {
            monblanPeople += peopleCnt;
        } else if (peopleCnt >= 13 && peopleCnt <= 25) {
            kilimanjaroPeople += peopleCnt;
        } else if (peopleCnt >= 26 && peopleCnt <= 40) {
            k2People += peopleCnt;
        } else if (peopleCnt >= 41) {
            everestPeople += peopleCnt;
        }

    }
    
    allPeople = musalaPeople + monblanPeople + kilimanjaroPeople + k2People + everestPeople;

    console.log((musalaPeople / allPeople * 100).toFixed(2) + "%");
    console.log((monblanPeople / allPeople * 100).toFixed(2) + "%");
    console.log((kilimanjaroPeople / allPeople * 100).toFixed(2) + "%");
    console.log((k2People / allPeople * 100).toFixed(2) + "%");
    console.log((everestPeople / allPeople * 100).toFixed(2) + "%");

}

trekking(["10",
        "10",
        "5",
        "1",
        "100",
        "12",
        "26",
        "17",
        "37",
        "40",
        "78"]);

trekking(["5",
        "25",
        "41",
        "31",
        "250",
        "6"]);

