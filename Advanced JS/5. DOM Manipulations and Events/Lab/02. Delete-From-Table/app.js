function deleteByEmail() {
    let email = document.querySelector('input[name="email"]').value;
    let trs = Array.from(document.querySelectorAll("tbody tr"));
    let result = document.querySelector('div[id="result"]');

    trs.forEach(function(tr) {
        let tds = tr.children;
        if (tds[1].textContent === email) {
            // delete the row
            tr.remove();
            result.textContent = "Deleted."
        } else {
            result.textContent = "Not found."
        }
    })
    
    document.querySelector('input[name="email"]').value = "";
}