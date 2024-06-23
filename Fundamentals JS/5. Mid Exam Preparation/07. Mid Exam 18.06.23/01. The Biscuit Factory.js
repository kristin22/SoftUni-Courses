function factory(nums) {
    nums = nums.map(Number);

    let produced = ((daily, employees) => { 
        let totalBisquits = 0; 
        for (let i = 1; i <= 30; i++) {
            if (i % 3 === 0) {
                totalBisquits += daily * employees * 0.75;
            } else {
                totalBisquits += daily * employees;
            }
        }

        return totalBisquits; 
    })(nums[0], nums[1]); 


    console.log(`You have produced ${produced} biscuits for the past month.`);

    let difference = produced - nums[2];
    let percentage = Math.abs(difference)/nums[2] * 100;
    if (difference < 0) {
        
        console.log(`You produce ${percentage.toFixed(2)} percent less biscuits.`);
    } else {
        console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`);
    }
}

factory(["78",
        "8",
        "16000"]);

factory(["65",
    "12",
    "26000"]);

factory(["163",
    "16",
    "67020"]);
