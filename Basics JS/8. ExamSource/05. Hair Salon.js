function haiSalon(input) {  
    let goal = Number(input[0]);
    
    let money = 0;
    let index = 0;

    while (money < goal) {
        let command = input[++index];

        if (command != "closed") {
            let type = input[++index];

            switch (command) {
                case "haircut":
                    switch (type) {
                        case "mens":      money += 15;    break;
                        case "ladies":    money += 20;    break;
                        case "kids":      money += 10;    break;
                    }
                    break;

                case "color":
                    switch (type) {
                        case "touch up":      money += 20;    break;
                        case "full color":    money += 30;    break;
                    }
                    break;
            }
        }
        
        if(command == "closed") {
            break;
        }
    }

    if(money >= goal) {
        console.log("You have reached your target for the day!");
    } else{
        let diff = Math.abs(goal - money);
        console.log(`Target not reached! You need ${diff}lv. more.`);
    }

    console.log(`Earned money: ${money}lv.`)
}

haiSalon(["300",
"haircut",
"ladies",
"haircut",
"kids",
"color",
"touch up",
"closed"])

haiSalon(["50",
"color",
"full color",
"haircut",
"ladies"]);