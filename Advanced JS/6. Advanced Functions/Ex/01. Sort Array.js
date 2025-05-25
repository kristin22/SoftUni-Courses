function sortArray(arr, str) {
    function sorter() {
        return str === 'asc' ? asc()
               :str === 'desc' ? desc() : null;           ;
    }
    function asc() {
        return arr.sort((a, b) => a-b);
    }
    function desc() {
        return arr.sort((a, b) => b-a);
    }

    return sorter();
} 

console.log(sortArray([14, 7, 17, 6, 8], 'asc'))
console.log(sortArray([14, 7, 17, 6, 8], 'desc')) 

//? Alternatives:
//1.
/* function sortArray(arr, str) {
    return str === 'asc' ? arr.sort((a, b) => a-b)
    :str === 'desc' ? arr.sort((a, b) => b-a) : null;
}
console.log(sortArray([14, 7, 17, 6, 8], 'asc'))
console.log(sortArray([14, 7, 17, 6, 8], 'desc'))  */

//2.
// function sortArray(arr, str) {
//     const result = sorter();
//     result[str](arr);

//     function sorter() {
//         return {
//             asc(arr) { return arr.sort((a, b) => a-b); },
//             desc(arr) { return arr.sort((a, b) => b-a); }
//         }
//     }

// }
// console.log(sortArray([14, 7, 17, 6, 8], 'asc'))
// console.log(sortArray([14, 7, 17, 6, 8], 'desc'))