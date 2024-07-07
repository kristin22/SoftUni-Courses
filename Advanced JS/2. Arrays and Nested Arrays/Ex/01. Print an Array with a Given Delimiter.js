function arrPrint(arr, delimiter) {
    return arr.join(delimiter);
}

console.log(arrPrint(['One', 
                    'Two', 
                    'Three', 
                    'Four', 
                    'Five'], 
                    '-'));

console.log(arrPrint(['How about no?', 
                    'I',
                    'will', 
                    'not', 
                    'do', 
                    'it!'], 
                    '_'));