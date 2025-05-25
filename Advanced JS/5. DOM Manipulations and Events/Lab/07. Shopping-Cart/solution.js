function solve() {
   let addBtns = Array.from(document.getElementsByClassName('add-product'));
   let checkout = document.getElementsByClassName('checkout')[0];
   let textArea = document.getElementsByTagName('textarea')[0];

   let products = {};
   let totalPrice = 0;
   
   addBtns.forEach(function(btn) {
      btn.addEventListener('click', addFunc);
   });

   function addFunc(event) {
      let name = event.target.parentNode.parentNode.getElementsByClassName('product-title')[0].textContent;
      let money = event.target.parentNode.parentNode.getElementsByClassName('product-line-price')[0].textContent;

      products.hasOwnProperty(name) ? products[name] += +money
      : products[name] = +money;

      textArea.textContent += (`Added ${name} for ${money} to the cart.\n`);
      totalPrice += +money;
   }

   checkout.addEventListener('click', checkoutFunc);

   function checkoutFunc(event) {
      let list = Object.keys(products);
      textArea.textContent  += `You bought ${list.join(", ")} for ${totalPrice.toFixed(2)}.`;

      // disable all buttons
      Array.from(document.querySelectorAll('button')).forEach(button=> button.disabled = true);
   }

}
