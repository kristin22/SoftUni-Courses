function solve(input) {
    let empList = [];

    function Employee(name, number) {
        this.name = name;
        this.number = number;
    }

    for (let index = 0; index  < input.length; index++) {
        let name = input[index];
        let number = name.length;
        let obj = new Employee(name, number);
        empList.push(obj);
    }

    for(let key in empList) {
        let curEmp = empList[key];
        console.log(`Name: ${empList[key].name} -- Personal Number: ${empList[key].number}`);
    }
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);

solve([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]);