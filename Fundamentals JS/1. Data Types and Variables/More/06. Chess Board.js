function chessBoard(n) {
    let prev = "black";
    let cur = "black";
    
    console.log(`<div class="chessboard">`);

    for(let i = 1; i <= n; i++) {
        console.log("  <div>");

        for(let j = 1; j <= n; j++) {
            console.log(`    <span class="${cur}"></span>`);
            prev = cur;
            if(prev === "black") {
                cur = "white";
            } else {
                cur = "black"
            }
        }

        if (n % 2 === 0) {
            if ( cur === "black") { cur = "white"; }
            else if (cur === "white") { cur = "black"; }
        }
        console.log("  </div>");
    }
    console.log("</div>");

}

chessBoard(6);

