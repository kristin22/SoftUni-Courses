function nonDecreasingSubset(arr) {
    let maxNum = arr[0];

    let result = arr.filter(num => {
        if (num >= maxNum) {
            maxNum = num;
        }
        return num >= maxNum;
    });

    console.log(result.join(" "));      // 1 3 8 10 12 24
}

nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([ 1, 2, 3, 4]);
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1]);

/* Друго решение

function solve(arr) {
    console.log(arr.filter((el, index) => el >= Math.max(...arr.slice(0, index))).join(' '));
}

*/

// https://softuni.bg/forum/15729/5-extract-an-non-decreasing-subsequence-from-an-array-javascript 