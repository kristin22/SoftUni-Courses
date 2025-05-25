function solution1 (input) {
    let output = [];

    const commands  = () => {
        return {
        add(string) { output.push(string); },
        remove(string) { output = output.filter( s => s !== string ) },
        print() { console.log(output.join(',')); },
        };
    };

    input.forEach(line => {
        const [command, str] = line.split(' ');
        commands.call()[command](str);
    });

}

function anotherSolution (arr) {
    let output = [];

    const commands  = {
        add(string) { output.push(string); },
        remove(string) { output = output.filter( s => s !== string ) },
        print() { console.log(output.join(',')); },
    };

    arr.forEach(el => {
        const [command, str] = el.split(' ');
        commands[command](str);
    });
 
}

// Solutiоn with Closure
function solution(arr) {  
    let output = [];  

    // Immediately Invoked Function Expression (IIFE) to create a closure  
    (function() {  
        const commands = {  
            add(string) { output.push(string); },  
            remove(string) { output = output.filter(s => s !== string); },  
            print() { console.log(output.join(',')); },  
        };  

        arr.forEach(el => {  
            const [command, str] = el.split(' ');  
            if (commands.hasOwnProperty(command)) {  
                commands[command](str);  
            }   
        });  
    })(); // Immediately invoke the IIFE  
}  


solution(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solution(['add pesho', 'add george', 'add peter', 'remove peter','print']);