function sortBy2Criterias(arr) {
    return arr.sort((a, b) => {
        return (a.length - b.length === 0) ? a.toLowerCase().localeCompare(b.toLowerCase())
        : a.length - b.length; 
    })
    .join("\n");
}

console.log(sortBy2Criterias(['alpha', 'beta', 'gamma']));
console.log(sortBy2Criterias(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));
console.log(sortBy2Criterias(['test', 'Deny', 'omen', 'Default']));