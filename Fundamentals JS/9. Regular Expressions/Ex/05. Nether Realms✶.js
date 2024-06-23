function neitherRealms(str) {
    const names = str.split(/\s*,\s*/gm).sort((a, b) => a.localeCompare(b));;

    let demonBook = []; // Sorted alphabetically
    let namePattern = /([^,])+/g;

    names.forEach(name => {
        name = name.match(namePattern).join("");
        if (namePattern.test(name)) {
            let letters = name.match(/[A-Za-z]/gm);

            let health = 0;
            let damage = 0;

            letters.forEach(letter => {
                health += letter.charCodeAt();
            });
           
            let numPattern = /[+-]?\d+(\.\d+)?/gm;
            let nums = name.match(numPattern);
           
            if (nums) {
                nums = nums.map((x) => Number(x));
                nums.forEach(num => damage += num);
            }

            let operations = name.match(/[\*\/]/gm);

            if (operations) {
                operations.forEach(operation => {
                    switch(operation) {
                        case "*": 
                            damage *= 2;
                            break;
                        case "/":
                            damage /= 2;
                            break;
                    }
                    return damage;
                });
            }

            demonBook.push({
                name: name,
                damage: damage,
                health: health,
            });
        }
    })
    
    demonBook.forEach(demon => {
        console.log(`${demon.name} - ${demon.health} health, ${demon.damage.toFixed(2)} damage`);
    })
}


neitherRealms('M3ph-0.5s-0.5t0.0**');
console.log("============");
neitherRealms('M3ph1st0**, Azazel');
console.log("============");
neitherRealms('Gos/ho');

/* Alternative solution

function foo(arr) {
    const hpRegex = /[^0-9\+\-\/\*\.]/g
    const splitRegx = /[, ]+/g
    const numbersRegx = /\-*[\d.\d]+/g
    const multipliersMatch = /[\*\/]/g
    const data = arr[0].split(splitRegx);
    const actions = {
        '/': (n) => n / 2,
        '*': (n) => n * 2,
    }
    let result = [];

    data.forEach(name => {
        const hpMatch = name.match(hpRegex) || []
        let damageMatch = name.match(numbersRegx) || []
        const multipliers = name.match(multipliersMatch) || []
        let damage = damageMatch.map(x => Number(x)).reduce((a, v) => a + v, 0)
        const health = hpMatch.map(x => x.charCodeAt(0)).reduce((a, v) => a + v, 0)

        multipliers.forEach(x => damage = actions[x](damage))

        result.push({
            name,
            health,
            damage
        })
    })

    result = result.sort((a, b) => a['name'].localeCompare(b['name']))
    result.forEach(x => console.log(`${x.name} - ${x.health} health, ${x.damage.toFixed(2)} damage`))
}

*/