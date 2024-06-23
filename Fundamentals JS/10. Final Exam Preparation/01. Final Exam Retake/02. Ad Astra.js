function adAstra(input) {   
    let store = [];
    input = input.join("");
    let totalCal = 0;


    let pattern = /(?<group1>#([A-Za-z\s]+)#(\d{2}\/\d{2}\/\d{2})#(\d+)#)|(?<group2>\|([A-Za-z\s]+)\|(\d{2}\/\d{2}\/\d{2})\|(\d+)\|)/g;

    input = input.match(pattern);
    if (input === null) {
        console.log(`You have food to last you for: 0 days!`);
        return;
    }

    input.forEach(line => {
        line = line.split(/[#\|]/);

        line = line.filter(el => { return el !== ""; });

        // console.log(line);
        // name date cal
        store.push({
            name: line[0],
            date: line[1],
            cal: Number(line[2]),
        });

        totalCal += Number(line[2]);

    });

    // 2000cal a day
    console.log(`You have food to last you for: ${Math.floor(totalCal/2000)} days!`);



    store.forEach(foodObj => {
        console.log(`Item: ${foodObj.name}, Best before: ${foodObj.date}, Nutrition: ${foodObj.cal}`);
    })

}

adAstra([ '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|' ]);

adAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ]);

adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@' ]);