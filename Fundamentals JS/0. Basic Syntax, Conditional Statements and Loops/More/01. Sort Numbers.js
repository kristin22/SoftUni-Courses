function sort3nums(a, b, c) {
    let text = '';
    let x = 0;

    if(b > a) {
        x = a;
        a = b;
        b = x;
    }
    if(c > a){
        x = a;
        a = c;
        c = x;
    }
    if(c > b) {
        x =  b;
        b = c;
        c = x;
    }
    console.log(`${a}\n${b}\n${c}`);
}

sort3nums(2, 1, 3);
sort3nums(-2, 1, 3);
sort3nums(0, 0, 2);