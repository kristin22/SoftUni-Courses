function demo(number) {
    
    function printNxN(number) {
        for(let i = 0; i < number; i++) {
            let line = "";
            for(let j = 0; j < number; j++) {
                line += (number + " ");
            }
            console.log(line.trim());
        }
    }

    printNxN(number);
}

demo(3);
demo(7);