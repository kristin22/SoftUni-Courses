function fancyBarcodes(input) {
    input.shift();
    let pattern = /@#+([A-Z][a-zA-Z\d]{4,}[A-Z])@#+/;
    // let groups = [];

    //! the pattern is finished, test it ant continue with the other stuff!!!
    // 1. Validate all the codes
    // 2. take out only the digits -> "00" is the default

    // input = input.match(pattern);
    input.forEach(code => {
        let isValid = pattern.test(code);
        group = code.match(/\d+/g); 

        if (group) { group = group.join("") };                

        if (isValid) {
            let message = group ? console.log(`Product group: ${group}`)
                        : console.log(`Product group: 00`);
        } else {
            console.log("Invalid barcode");
        }

    });

}

fancyBarcodes(["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"]);

fancyBarcodes(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"]);
