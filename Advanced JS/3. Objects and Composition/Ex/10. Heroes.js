function solve() {

    const obj = {
        fighters: {
            fight() {}
        },
        mages: {
            cast() {
                console.log(`${}`);
                
            }
        },
        heroes: {},

        mage(name) {
            // this.mages.push({name: name, health: 100, mana: 100});
            this.mages[name] = {health: 100, mana: 100}
        },
        fighter(name) {
            // this.fighters.push({name: name, health: 100, stamina: 100});
            this.fighters[name] = {health: 100, stamina: 100}
        }
    };

    return obj;
}


let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
