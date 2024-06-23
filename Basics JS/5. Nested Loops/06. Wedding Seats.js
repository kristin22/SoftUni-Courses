function seats(input) {
    let e = input[0];
    let sector = e.charCodeAt(0);  // A-Z

    let rows = Number(input[1]);    
    let oddSeats = Number(input[2]);
    let evenSeats = oddSeats + 2;
    let cnt = 0;

    for(let s = 65; s <= sector; s++) {
        if(s > 65) {
            rows++;
        }
        for(let r = 1; r <= rows; r++) {
            let currEven = evenSeats;
            let currOdd = oddSeats;

            for(let seat = 97; seat <= 122; seat++) { 

                console.log(String.fromCharCode(s) + r + String.fromCharCode(seat));
                cnt++;

                if (r % 2 === 0) {
                    currEven--;
                } else {
                    currOdd--;
                }
                if(currEven === 0 || currOdd === 0) {
                    break;
                }
            }
        }
    }

    console.log(cnt);
}

seats(["B", 3, 2]);