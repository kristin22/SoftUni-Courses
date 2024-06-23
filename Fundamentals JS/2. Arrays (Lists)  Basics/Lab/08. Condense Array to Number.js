function condenseArray(nums) {
    let condensed = [];

    let index = nums.length;

    if (nums.length === 1) {
        condensed = nums;
    } else {
        while (index > 1) {
            for (let i = 1; i < nums.length; i++) {
                let prevNum = nums[i-1];
                condensed.push(nums[i] + nums[i-1]);
            }
            nums = condensed;
            index = nums.length;
            if (index > 1) {
                condensed = [];
            }

        }
    }

    if(index === 1) {
    console.log(condensed.toString());
    }
}

condenseArray([2,10,3]);
condenseArray([5,0,4,1,2]);
condenseArray([1]);