function loadingBar(number) {

    function printLoad(number) {

        if (number >= 0 && number <= 90) {
            const loadLine = [".", ".", ".", ".", ".", ".", ".", ".", ".", "."];
            let n = number / 10;

            for(let l = 0; l < n; l++) {
                loadLine[l] = "%";
            }

            console.log(`${number}% [${loadLine.join("")}]`);
            console.log("Still loading...");

        } else if (number === 100) {
            console.log("100% Complete!");
            console.log("[%%%%%%%%%%]");
        }
    }

    printLoad(number);
}

loadingBar(30);
loadingBar(50);
loadingBar(100);