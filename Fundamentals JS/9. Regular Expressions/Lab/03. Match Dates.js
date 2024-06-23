function matchDates(input) {
    // input = input.join(" "); // the input is an array with only one element
    
    let pattern = /(\d{2}\/[A-Z]{1}[a-z]{2}\/\d{4})|(\d{2}-[A-Z]{1}[a-z]{2}-\d{4})|(\d{2}\.[A-Z]{1}[a-z]{2}\.\d{4})/g;

    let datesRaw =  input[0].match(pattern);
    // let dates = [];
    let dateRegex = /\/|\-|\./g;

    datesRaw.forEach(date => {
        date = date.split(dateRegex);
        console.log(`Day: ${date[0]}, Month: ${date[1]}, Year: ${date[2]}`);
    });
}

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);


matchDates(['1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014']);