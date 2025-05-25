function solve(array, startIndex, endIndex) {
    // handle special cases:
    if (!Array.isArray(array))   { return NaN ;                 } 
    if (startIndex < 0)          { startIndex = 0;              }
    if (endIndex > array.length) { endIndex = array.length - 1; }

    return array.slice(startIndex, endIndex + 1)
                .map(Number)
                .reduce((sum, num) => sum + num, 0)
}

console.log(solve([10, 20, 30, 40, 50, 60], 3, 300))    // 150
console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1))    // 3.3
console.log(solve([10, 'twenty', 30, 40], 0, 2))        // NaN
console.log(solve([], 1, 2))                            // 0
console.log(solve('text', 0, 2))                        // NaN

