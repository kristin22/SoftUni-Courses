function addItem() {
    const text = document.getElementById('newItemText').value;
    const val = document.getElementById('newItemValue').value;

    let opt = document.createElement('option');
    opt.textContent = val;
    opt.value = text;

    document.getElementById('menu').appendChild(opt);
    
    text = '';
    val = '';
} 