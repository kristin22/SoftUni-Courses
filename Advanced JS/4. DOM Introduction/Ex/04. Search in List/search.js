function search() {
   let towns = Array.from(document.querySelectorAll("#towns li"));
   let sch = document.getElementById("searchText").value;

   let cnt = 0;
   for(let town of towns) {
      if (town.textContent.includes(sch)) {
         town.style.fontWeight = "bold";
         town.style.textDecoration = "underline";
         cnt++;
      }
   }

   document.getElementById("result").textContent = `${cnt} matches found`;
}
