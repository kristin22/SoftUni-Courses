function gaining(input) {
    let wantedXP = input.shift();
    let battles =  input.shift();

    // 50 + 100 + 200 * 1.15 + 100 + 30 * 0.9 = 507

    let total = 0;
    let n = 0;

    for (let i = 0; i < battles; i++) {
        if(input[i] < 50) {
            total += input[i] * 0.9;
        } else if(input[i] >= 50 && input[i] < 200) {
            total += input[i];
        } else {
            total += input[i] * 1.15;
        }
        
        if (total >= wantedXP) {
            console.log(`Player successfully collected his needed experience for ${i+1} battles.`);
            return;
        } 
    }


    if (total < wantedXP) {
        console.log(`Player was not able to collect the needed experience, ${(wantedXP - total).toFixed(2)} more needed.`);
    }
}

gaining([500,
        5,
        50,
        100,
        200,
        100,
        30]);

gaining([500,
        5,
        50,
        100,
        200,
        100,
        20]);
    
gaining([400,
        5,
        50,
        100,
        200,
        100,
        20]);    