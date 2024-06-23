function addAndRemove(arr) {
    let numArr = [];
    let command = "";
    let currNum = 1;

    for(let i = 0; i < arr.length; i++) {
        command = arr[i];
        if (command === "add") {
            numArr.push(currNum);
        } else if (command === "remove") {
            numArr.pop();
        }
        currNum++;
    }

    if (numArr.length === 0) {
        console.log("Empty");
    } else {
        let output = numArr.join(" ");
        console.log(output);
    }
}

addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);