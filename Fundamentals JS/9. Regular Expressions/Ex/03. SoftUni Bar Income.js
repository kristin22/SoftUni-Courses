function barIncome(input) {

    let regex = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^\d|$%.]*(?<price>\d+\.?\d+)\$/;

    let total = 0;

    let line = input.shift();
    while (line !== "end of shift") {
        let isValid = line.match(regex);
        if (!isValid) {
            line = input.shift();
            continue;
        }

        let currTotal = Number(isValid.groups.count) * Number(isValid.groups.price);
        total += currTotal;
        console.log(`${isValid.groups.customer}: ${isValid.groups.product} - ${currTotal.toFixed(2)}`);

        line = input.shift();
    }

    console.log(`Total income: ${total.toFixed(2)}`);
}

barIncome([ "%George%<Croissant>|2|10.3$",
            "%Peter%<Gum>|1|1.3$",
            "%Maria%<Cola>|1|2.4$",
            "end of shift" ]);
  
barIncome([ "%InvalidName%<Croissant>|2|10.3$",
            "%Peter%<Gum>1.3$",
            "%Maria%<Cola>|1|2.4",
            "%Valid%<Valid>valid|10|valid20$",
            "end of shift" ]);