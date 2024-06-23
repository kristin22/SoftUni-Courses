function arenaTier(input) {
    let arena = {};

    // adding tech
    while(input.length > 1) {
        let line = input.shift().split(" ").filter(word => { return word !== "->"}); // name tech skill
        
        let areThere = arena.hasOwnProperty(line[0]) && arena.hasOwnProperty(line[2]);
        if(line[1] === "vs" && areThere) {
            // make a function to compare the techs and delete one name if you have to
            continue;
        }
        
        if (!Object.keys(arena).includes(line[0])) {
            arena[line[0]] = {};
            arena[line[0]]["technique"] = {};
            arena[line[0]]["totalSkill"] = 0;
            arena[line[0]]["technique"][line[1]] = Number(line[2]);
        } else {
            if (!Object.keys(arena[line[0]]["technique"]).includes(line[1])) {   // arena[line[0]] is the nested array
                arena[line[0]]["technique"][line[1]] = Number(line[2]);
            } else if (arena[line[0]]["technique"][line[1]] < Number(line[2])) {    // skill update
                arena[line[0]]["technique"][line[1]] = Number(line[2]);
            }
        }
    }

    // calculating totalSkill for each player
    let output = Object.entries(arena);
    
    for(let key of output) {
        // key[0] name, key[1]["technique"], key[1]["totalSkill"]
        for (let k of Object.entries(key[1]["technique"])) {
            arena[key[0]]["totalSkill"] += k[1];
        }

    }

    

    
    
}

// arenaTier([
//     'Peter -> BattleCry -> 400',
//     'Alex -> PowerPunch -> 300',
//     'Stefan -> Duck -> 200',
//     'Stefan -> Tiger -> 250',
//     'Ave Cesar'
// ]);

arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]);