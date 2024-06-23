function worldTour(input) {     // 66/100
    let str = input.shift();

    function print(str) {
        console.log(str);
    }

    input.forEach(el => {
        if (el === "Travel") {
            console.log(`Ready for world tour! Planned stops: ${str}`);
            return;
        }

        let [cmd, a, b] = el.split(":");
        
        if (cmd === "Add Stop" && (Number(a) > -1 && Number(a) < str.length)) {
            str = str.slice(0, Number(a)) + b + str.slice(Number(a));
            print(str);
        } else if (cmd === "Remove Stop" && (Number(a) > -1 && Number(a) < str.length) && (Number(b) > -1 && Number(b) < str.length)&& (a <= b)) {
            a = Number(a);  b = Number(b);
            str = str.slice(0,a) + str.slice(b+1);
            print(str);
        } else if (cmd === "Switch") {
            str = str.replace(a, b);
            print(str);
        } 
    });

}

worldTour(["Hawai::Cyprys-Greece",
            "Add Stop:7:Rome",
            "Remove Stop:11:16",
            "Switch:Hawai:Bulgaria",
            "Travel"]);

worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
            "Add Stop:3:Nigeria",
            "Remove Stop:4:8",
            "Switch:Albania: Azərbaycan",
            "Travel"]);