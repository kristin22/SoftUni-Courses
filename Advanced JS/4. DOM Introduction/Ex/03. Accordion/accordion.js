function toggle() {
    
    let button = document.getElementsByClassName("button")[0];
    let textSet = document.getElementById("extra");

    (button.textContent === "More") ? (button.textContent = "Less", textSet.style.display = "block")
    : (button.textContent = "More", textSet.style.display = "none") ;

}