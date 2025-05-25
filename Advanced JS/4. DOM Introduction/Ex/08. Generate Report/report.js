// function generateReport() {
//     let output = document.getElementById("output").value;
//     let ths = document.querySelectorAll("theat tr th");

//     let tds = document.querySelectorAll("tbody tr");

// }


// Alternative: 
function generateReport() {

    let inputTags = Array.from(document.getElementsByTagName('input'));
    let trs = Array.from(document.getElementsByTagName('tr'));

    let resultArr = [];
    let checkedCols = [];

    for (let i = 0; i < trs.length; i++) {
        let row = trs[i];
        let obj = {};

        for (let j = 0; j < row.children.length; j++) {
            let element = row.children[j];
            if (i === 0) {
                if (element.children[0].checked) {
                    checkedCols.push(j);
                }
                continue;
            }

            if (checkedCols.includes(j)) {
                let propertyName = inputTags[j].name;
                obj[propertyName] = element.textContent;
            }
        }
        if (i !== 0) {
            resultArr.push(obj);
        }
    }

    document.getElementById('output').value = JSON.stringify(resultArr);
}