function matchPhone(input) {
    let pattern = /(\+359 2[ ]{1}[0-9]{3}[ ]{1}\d{4})|(\+359\-2\-[0-9]{3}\-\d{4}[ ,]?)\b/g;

    let output = input[0].match(pattern);
    console.log(output.join(", "));
    
}

// matchPhone(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);

matchPhone(['+359 2 357 3351 +359 2 22 2222 +359 2 173 3408 +359-2-789-2584 +359 2 193 3953 +359-2-961-0248 +359-2-789-2584 +359 2 222 222 +360 2 222 2222 +359 2 727 9740 +359-2-854-2280 +359 2 193 3953 +359 2 357 3351 +359 2 558 8560 +359 2 222 222']);

