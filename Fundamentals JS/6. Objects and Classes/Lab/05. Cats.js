function kitty(arr) {

    class cats {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.meow = function() {
                return console.log(`${this.name}, age ${this.age} says Meow`);
            }
        }
    };

    for(element of arr) {
        element = element.split(" ");
        let name = element[0];
        let age = Number(element[1]);

        let obj = new cats(name, age);
        obj.meow();
    }

}

kitty(['Mellow 2', 'Tom 5']);
kitty(['Candy 1', 'Poppy 3', 'Nyx 2']);