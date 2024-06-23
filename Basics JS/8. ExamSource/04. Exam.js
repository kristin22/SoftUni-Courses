function exam(input) {
    let studentsCount = Number(input[0]);
    
    let cnt5 = 0, cnt4 = 0, cnt3 = 0, cnt2 = 0;
    let sum = 0;

    let currgrade = 0;
    for(let i = 1; i <= studentsCount; i++) {
        currgrade = Number(input[i]);
        sum += currgrade;

        if(currgrade >= 5 && currgrade <= 6) {
            cnt5++;
        } else if(currgrade >= 4 && currgrade <= 4.99) {
            cnt4++;
        } else if(currgrade >= 3 && currgrade <= 3.99) {
            cnt3++;
        } else if(currgrade < 3) {
            cnt2++;
        }
    }

    console.log(`Top students: ${(cnt5 / studentsCount * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(cnt4 / studentsCount * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(cnt3 / studentsCount * 100).toFixed(2)}%`);
    console.log(`Fail: ${(cnt2 / studentsCount * 100).toFixed(2)}%`);
    console.log(`Average: ${(sum / studentsCount).toFixed(2)}`);    

}

exam(['10',
'3.00',
'2.99',
'5.68',
'3.01',
'4',
'4',
'6.00',
'4.50',
'2.44',
'5']);