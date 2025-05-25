function addItem() {
    let newItem = document.getElementById('newItemText');
    let li = document.createElement("li");
    document.getElementById('items').appendChild(li);

    li.textContent = newItem.value;
    // li.createTextNode(newItem.value);

    let delBtn = document.createElement("a");
    delBtn.href = '#';
    delBtn.textContent = '[Delete]'
    // delBtn.createTextNode('[Delete]');

    delBtn.addEventListener('click', onClick);
    function onClick() {
        delBtn.parentNode.remove();
    }

    li.appendChild(delBtn);

    newItem.value = "";

}