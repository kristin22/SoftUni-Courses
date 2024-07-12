function fromJSONToHTMLTable(json){
    const arrFromJSON = JSON.parse(json);
    const output = ["<table>"];
    
    const keys = Object.keys(arrFromJSON[0]);
    let line = "   <tr>";
    keys.forEach(key => { line += `<th>${escapeHtml(key)}</th>`; })
    line += "</tr>";
    output.push(line);

   
    for (obj of arrFromJSON) {
         line = "   <tr>"
         Object.values(obj).forEach(value => {
            line += `<td>${escapeHtml(value)}</td>`;
        })
        line += "</tr>";
        output.push(line);
    }
    
    output.push("</table>");

    function escapeHtml(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }


    return output.join("\n");
}

console.log(fromJSONToHTMLTable(`[{"Name":"Stamat", "Score":5.5},
                                  {"Name":"Rumen", "Score":6}]`));

console.log(fromJSONToHTMLTable(`[{"Name":"Pesho", "Score":4,  "Grade":8},
                                  {"Name":"Gosho", "Score":5, "Grade":8},
                                  {"Name":"Angel", "Score":5.50, "Grade":10}]`));