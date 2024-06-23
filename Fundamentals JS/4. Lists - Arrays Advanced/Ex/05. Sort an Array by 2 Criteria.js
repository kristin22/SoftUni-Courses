function sort2criterias(input) {

    input.sort((curr, next) => curr.length - next.length || curr.localeCompare(next));

    // input.sort((curr, next) => curr.length - next.length);         Will sort the array by the lenght of each element, starting with the shortest
    // input.sort((curr, next) => curr.localeCompare(next));         Will sort the array alphabetically starting from a to z 

    //  input.sort((curr, next) => curr.length - next.length || curr.localeCompare(next));  
    //  If the length is different it will record first the sorterst and then the longest
    // If the length is equal it will comare the letters and it wil sort the two elements alphabeticaly
    

    console.log(input.join("\n"));
}

sort2criterias(['alpha', 'beta', 'gamma']);
sort2criterias(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);