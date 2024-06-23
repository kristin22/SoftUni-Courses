function armiesF(input) {
    let armies = {};

    while (input.length !== 0) {
        let curr = input.shift().split(" ");

        if (curr[curr.length-1] === "arrives") {    
            // add the leader
            curr.pop();
            curr = curr.join(" ");
            armies[curr] = {
            }

        } else if (curr[curr.length-1] === "defeated") {
            // delete the leader and his army (if he exists)
            curr.pop();
            curr = curr.join(" ");
            delete armies[curr];

        } else if (curr[1] === "+") {
            // add the army (if it exists)
            for (let leader in armies) {

                if (armies[leader].hasOwnProperty(curr[0])) {
                    armies[leader][curr[0]] += Number(curr[2]);
                    break;
                }
            }
        } else {
            // add the army with its count to the leader (if he exists)
            let count = Number(curr.pop());

            let army = curr.pop();
            army = army.split("")
            army.pop();
            army = army.join("");   // removing the , from the army name

            let leader = curr.join(" ");
            leader = leader.split("");
            leader.pop();
            leader = leader.join(""); // removing : from the leader     name

            if (armies.hasOwnProperty(leader)) {
                if (armies[leader].hasOwnProperty(army)) {
                    armies[leader][army] += count;
                } else {
                    armies[leader][army] = count;
                }
            } 
        }

    }

    // Calculate and output total and the armies for each leader
    for(let leader in armies) {
        console.log("x");
    }



}

armiesF(['Rick Burr arrives', 
        'Fergus: Wexamp, 30245', 
        'Rick Burr: Juard, 50000', 
        'Findlay arrives', 
        'Findlay: Britox, 34540', 
        'Wexamp + 6000', 
        'Juard + 1350', 
        'Britox + 4500', 
        'Porter arrives', 
        'Porter: Legion, 55000', 
        'Legion + 302', 
        'Rick Burr defeated', 
        'Porter: Retix, 3205']);

armiesF(['Rick Burr arrives', 
        'Findlay arrives', 
        'Rick Burr: Juard, 1500', 
        'Wexamp arrives', 
        'Findlay: Wexamp, 34540', 
        'Wexamp + 340', 
        'Wexamp: Britox, 1155', 
        'Wexamp: Juard, 43423']);