function diagonalSums(arr) {
    let firstDiag = 0;
    let secondDiag = 0;
    let firstIndex = 0;
    let secondIndex = arr.length - 1;
    
    arr.forEach(line => {
        firstDiag += line[firstIndex++];
        secondDiag += line[secondIndex--];
    });
        
   return `${firstDiag} ${secondDiag}`;
}

console.log(diagonalSums([[20, 40], [10, 60]]));
console.log(diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]));