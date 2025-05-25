function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let trs = document.querySelectorAll("tbody tr");

   function onClick() {

      let searched = document.getElementById("searchField").value.toLowerCase();
      trs.forEach(tr => tr.classList.remove("select"));  

      trs.forEach( tr => {
         tr.childNodes.forEach((node) => {
            if (node.textContent.toLowerCase().includes(searched)) {
               tr.classList.add("select");
            }
         })
      })

      document.getElementById("searchField").value = ""
   }
}

