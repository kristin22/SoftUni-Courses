function maxSequence(arr) {
    let prevArr = [];
    let currArr = [];

    currArr.push(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === currArr[0] || currArr.length === 0) {
            currArr.push(arr[i]);
            if (currArr.length === arr.length) {
                prevArr = currArr;
            }
        } else {
            if (prevArr.length < currArr.length) {
                prevArr = [];
                for(let j = 0; j < currArr.length; j++) {
                    prevArr.push(currArr[j]);
                }
            }

            currArr = [];
            currArr.push(arr[i]);
        }
    }
    
    console.log(prevArr.join(" "));
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequence([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequence([4, 4, 4, 4]);
maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);