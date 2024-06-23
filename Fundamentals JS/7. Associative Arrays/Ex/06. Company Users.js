function companyUsers(input) {
    let companies = {};

    for(let a of input) {
        a = a.split(" -> ");
        if (companies.hasOwnProperty(a[0])) { // the company is already added
            if (companies[a[0]].includes(a[1])) {
                continue;
            }
            companies[a[0]].push(a[1]);
        } else {
            companies[a[0]] = [a[1]];
        }
    }

    let output = Object.entries(companies).sort();

    for (let l of output) {
        console.log(l[0]);
        for(let i = 0; i < l[1].length; i++) {
            console.log("--", l[1][i]);
        }
    }

}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);