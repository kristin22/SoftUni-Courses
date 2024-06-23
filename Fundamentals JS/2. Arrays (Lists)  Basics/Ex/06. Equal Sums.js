function equalSum(nums) {
    let output = "no";
    let cnt = 0;

    for (let i = 0; i < nums.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let l = 0; l < i; l++) {
            leftSum += nums[l];
        }
        
        for (let r = i+1; r < nums.length; r++) {
            rightSum += nums[r];
        }

        if (leftSum === rightSum) { output = i; }
    }

    console.log(output);
}

equalSum([1, 2, 3, 3]);
equalSum([1, 2]);
equalSum([1]);
equalSum([1, 2, 3]);
equalSum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);