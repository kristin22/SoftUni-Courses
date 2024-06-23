function furnish(input) {   // 80/100
    let furniture = [];
    let total = 0;

    input.forEach(line => {
        let regex = />>[A-Z][a-zA-Z]*<<\d+\.?\d*\!{1}\d+/g;

        if (regex.test(line)) { 
            line = line.split(/>>|<<|!/);
            line.shift();
            
            furniture.push(line[0]);
            total += Number(line[1]) * Number(line[2]);
        }         
    });

    // Output:
    console.log("Bought furniture:");
    for(const prop of furniture) {
        console.log(prop); 
    }

    console.log(`Total money spend: ${total.toFixed(2)}`);
}

furnish(['>>Sofa<<312.23!3',
        '>>TV<<300!5',
        '>Invalid<<!5',
        'Purchase']);

furnish(['>>Laptop<<312.2323!3',
        '>>TV<<300.21314!5',
        '>Invalid<<!5',
        '>>TV<<300.21314!20',
        '>>Invalid<!5',
        '>>TV<<30.21314!5',
        '>>Invalid<<!!5',
        'Purchase']);

furnish(['>Invalid<<!4',
        '>Invalid<<!2',
        '>Invalid<<!5',
        'Purchase']);