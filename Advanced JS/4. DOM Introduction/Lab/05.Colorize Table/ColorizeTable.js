function colorize() {
    let table =  Array.from(document.querySelectorAll("table tr"));

    table.map((el, index) => {
        if (index %  2 !== 0)  el.style.backgroundColor = "teal";
    })
}


/* Alternative:

function colorize() {
    let table =  Array.from(document.querySelectorAll("table tr"));

    table.map((el, index) => {
        if (index %  2 !== 0)  el.style.backgroundColor = "teal";
    })
}

*/
