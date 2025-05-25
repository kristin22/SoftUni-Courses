function solve() {
  const [generateBtn, buyBtn] = document.getElementsByTagName('button');
  const [generateField, buyField] = document.getElementsByTagName('textarea');
  const tbody = document.querySelector("tbody");

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  function generate() {
    let products = JSON.parse(generateField.value);

    products.forEach(product => {
      let {name, img, price, decFactor} = product;

      let tr = `
        <td><img src=${img}></td>
        <td><p>${name}</p></td>
        <td><p>${price}</p></td>
        <td><p>${decFactor}</p></td>
        <td><input type="checkbox"/></td>`;

      tbody.insertAdjacentHTML('beforeend', `<tr>${tr}</tr>`);
    });

    generateField.value = '';
  }

  function buy() {
    let [products, prices, decFactors] = [[], [], []];

    Array.from(document.getElementsByTagName('input')).forEach(chBox => {
      if (chBox.checked) {
        let parentElTr = chBox.parentElement.parentElement;
        let [name, price, decFactor] = parentElTr.querySelectorAll('td p');

        products.push(name.textContent);
        prices.push(+price.textContent);
        decFactors.push(+decFactor.textContent);
      }
    });

    let totalPrice = prices.reduce((a, v) => a + v, 0);
    let avgDec = decFactors.reduce((a, v) => a + v, 0) / decFactors.length;

    buyField.textContent = `Bought furniture: ${products.join(", ")}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avgDec}`;

  }
  
}
