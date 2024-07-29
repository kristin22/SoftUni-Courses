function extractText() {
    let ulText = document.getElementById("items").textContent;
    let result = document.getElementById("result");
    result.textContent = ulText;
}