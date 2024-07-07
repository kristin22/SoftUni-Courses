function addRemoveEls(arr) {
    let result = [];
    let num = 1;
    arr.forEach(cmnd => {
        (cmnd === "add") ? result.push(num++)
        : (cmnd === "remove") ? (result.pop(), num++) : null;
    })

    return (result.length > 0) ? result.join("\n") : "Empty";
}

console.log(addRemoveEls(['add', 'add', 'add', 'add']));
console.log(addRemoveEls(['add', 'add', 'remove', 'add', 'add']));
console.log(addRemoveEls(['remove', 'remove', 'remove']));