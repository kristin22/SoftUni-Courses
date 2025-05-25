function create(words) {
   let parentDiv = document.getElementById('content');

   words.forEach(word => {
      let div = document.createElement('div');
      parentDiv.appendChild(div);

      let p = document.createElement('p');

      p.textContent = word;
      p.style.display = 'none';

      div.appendChild(p);

      div.addEventListener('click', onClick);
      function onClick() {
         div.children[0].style.display = "block";
      }

   });

}