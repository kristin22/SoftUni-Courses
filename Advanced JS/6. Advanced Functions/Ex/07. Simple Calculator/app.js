function calculator() {
    let selector1, selector2, resultSelector;

    return {
        init (sel1ID, sel2ID, resSelID) {
            // initializes the object to work with the elements corresponding to the supplied selectors
            selector1 = document.querySelector(sel1ID)
            selector2 = document.querySelector(sel2ID)
            resultSelector =  document.querySelector(resSelID)
        },
        add () {

            resultSelector.value = +selector1.value + +selector2.value
        },
        subtract () {
            resultSelector.value = +selector1.value - +selector2.value

        }
    }
}

const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 



