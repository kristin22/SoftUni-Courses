function productsList(list) {
    list.sort();

    for(let i = 0; i < list.length; i++) {
        console.log(`${i+1}.${list[i]}`);
    }
}

productsList(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
productsList(['Watermelon', 'Banana', 'Apples']);