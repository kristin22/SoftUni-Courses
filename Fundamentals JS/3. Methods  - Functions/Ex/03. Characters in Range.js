function output(a, b) {

    let print = (a, b) => {
        let starts = a.charCodeAt(0);
        let ends = b.charCodeAt(0);

        let line = "";
        if (starts <= ends) {
            for (let i = starts+1; i < ends; i++) {
                line += String.fromCharCode(i) + " ";
            }
        } else {
            for (let i = ends + 1; i < starts; i++) {
                line += String.fromCharCode(i) + " ";
            }
        }

        return line.trim();
    }

    console.log(print(a, b));
}

output("a", "d");
output("#", ":");
output("C", "#");