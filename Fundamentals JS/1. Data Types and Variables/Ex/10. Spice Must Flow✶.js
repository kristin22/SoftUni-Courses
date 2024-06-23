function spiceFlow(yield) {
    let total = 0;
    let days = 0;
    let extracted = 0;
    let consumed = 0;
    
    while (yield >= 100) {
        days++;
        extracted += yield;
        consumed += 26;
        yield -= 10;    
    }

    consumed += 26;

    total = extracted - consumed;

    // after the last consumption if total drops below 0, must be 0
    if (total < 0) total = 0;

    console.log(days);
    console.log(total);

}

spiceFlow(111);
spiceFlow(450);