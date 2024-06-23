function schoolRegister(input) {
    let info = input;
    let school = {};

    for (let l = 0; l < info.length; l++) {
        info[l] = info[l].split(", ");
        for (let v = 0; v < info[l].length; v++) {
            info[l][v] = info[l][v].split(": ");
        }
    }

    info.forEach(line => {
        let name = line[0][1];
        let grade = Number(line[1][1]) + 1 ;
        let score = line[2][1];
        //! don't add the student if his score is lower than 3


        if (!school.hasOwnProperty(grade)) {
            school[grade] = {};
        }

        if (score >= 3) {
            school[grade][name] = Number(score);
        }
        
    })

    for(const grade in school) {
        let list = "List of students: "

        let names = Object.keys(school[grade]);
        let n = names.length;
        let average = 0;

        for(const name of names) {
            list += `${name}, `;
            average += school[grade][name];
        }

        list = list.slice(0, list.length - 2);
        average /= n;

        if (list.length > 18) {
            console.log(`${grade} Grade`);
            console.log(list);
            console.log(`Average annual score from last year: ${average.toFixed(2)}\n`);
        }
        
    }

}

// schoolRegister([ "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
//                 "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
//                 "Student name: George, Grade: 8, Graduated with an average score: 2.83",
//                 "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
//                 "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
//                 "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
//                 "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
//                 "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
//                 "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
//                 "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
//                 "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
//                 "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00" ]);

console.log("=================");

schoolRegister([ 'Student name: George, Grade: 5, Graduated with an average score: 2.75',
                'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
                'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
                'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
                'Student name: John, Grade: 9, Graduated with an average score: 2.90',
                'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
                'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15' ]);