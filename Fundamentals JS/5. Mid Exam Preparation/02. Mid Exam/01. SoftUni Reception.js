function reception(arr) {
    arr = arr.map(Number);
    
    let total = arr[3];
    let sumed = arr[0] + arr[1] + arr[2];

    let hours = 1;

    while(true) {
        if(sumed * hours >= total) {
            break;
        }

        hours++;
    }


    for(let i = 1; i <= hours; i++) {
        if( i % 4 === 0) {
            hours++;
        }
    }

    console.log(`Time needed: ${hours}h.`);

}

reception(['5','6','4','20']);
reception(['1','2','3','45']);
reception(['3','2','5','40']);