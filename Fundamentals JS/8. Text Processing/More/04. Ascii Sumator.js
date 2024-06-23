function asciiSum(input) {
    let sum = 0;
    let starts = input.shift().charCodeAt();
    let ends = input.shift().charCodeAt();

    if(starts > ends) {   
        [starts, ends] = [ends, starts];
    }

    input = input.join("");

    for (let el of input) {
        if (el.charCodeAt() > starts && el.charCodeAt() < ends) {
            sum += el.charCodeAt();
        }
    }

    console.log(sum);
}

asciiSum(['.', '@', 'dsg12gr5653feee5']);

asciiSum(['?', 'E', '@ABCEF']);

asciiSum(['a', '1', 'jfe392$#@j24ui9ne#@$']);