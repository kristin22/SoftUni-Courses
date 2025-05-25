function solution( data, criteria ) {
    let employees = JSON.parse(data);
    const [key, value] = criteria.split('-');

    return employees.filter((emp, i) => {
        return key === 'all' || emp[key] === value; 
    }).reduce((acc, emp, index) => {
        acc.push(`${index}. ${emp.first_name} ${emp.last_name} - ${emp.email}`)
        return acc;
    }, []).join('\n');

}

console.log(solution(`[{
            "id": "1",
            "first_name": "Ardine",
            "last_name": "Bassam",
            "email": "abassam0@cnn.com",
            "gender": "Female"
        }, {
            "id": "2",
            "first_name": "Kizzee",
            "last_name": "Jost",
            "email": "kjost1@forbes.com",
            "gender": "Female"
        },  
        {
            "id": "3",
            "first_name": "Evanne",
            "last_name": "Maldin",
            "email": "emaldin2@hostgator.com",
            "gender": "Male"
        }]`, 
             'gender-Female'))

console.log('-------');


console.log(solution(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'last_name-Johnson'
));
