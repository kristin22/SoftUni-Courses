function shoppingList(arr) {
    let str = arr[0];
    let list = str.split("!");

    for(let i = 1; i < arr.length; i++) {
        str = arr[i];

        if(str === "Go Shopping!") {
            break;
        }

        let currArr = str.split(" ");

        let index = list.findIndex(thing => thing === currArr[1]);
        
        if (currArr[0] === "Urgent") {
            if (index === -1) {
                list.unshift(currArr[1]);
            }
        } else if (currArr[0] === "Unnecessary") {
            // Function to find the index
            if (index > -1) {
                splice(index, 1);   // Removing an item
            }

        } else if (currArr[0] === "Correct") {
            list[index] = currArr[2];
        } else if (currArr[0] === "Rearrange") {
            if (index > -1) {
                // let el = arr[1];
                list.push(list[index]);
                list.splice(index, 1);


            }
        }
    }    

    str = list.join(", ");  //  list = list.join(", "); 
    console.log(str);       

}

shoppingList(["Tomatoes!Potatoes!Bread",
                "Unnecessary Milk",
                "Urgent Tomatoes",
                "Go Shopping!"]);

shoppingList(["Milk!Pepper!Salt!Water!Banana",
                "Urgent Salt",
                "Unnecessary Grapes",
                "Correct Pepper Onion",
                "Rearrange Grapes",
                "Correct Tomatoes Potatoes",
                "Go Shopping!"]);