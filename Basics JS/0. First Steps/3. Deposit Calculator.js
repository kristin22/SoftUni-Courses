function depositCalc(input) {   
    let depositSum = Number(input[0]);
    let monthCnt = Number(input[1]);
    let yearPer = Number(input[2]);

    let perMonth = (depositSum * (yearPer/100)) / 12;
  
    let sum =  depositSum + monthCnt * perMonth;
    console.log(sum);
}

depositCalc(["200", "3", "5.7"]);
depositCalc(["2350", "6", "7"]);