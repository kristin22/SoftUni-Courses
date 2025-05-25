function addItem() {
    let li = document.createElement("li");
    document.getElementById("items").appendChild(li);
    li.textContent = document.getElementById("newItemText").value;

    document.getElementById("newItemText").value = "";
}