function focused() {
    let inputs = Array.from(document.querySelectorAll('input'));

    inputs.forEach(function(i) {
        i.addEventListener('focus', focused);
        i.addEventListener('blur', blured);
    })

    function focused(event) {
        event.target.parentElement.classList.add('focused'); 
    }

    function blured(event) {
        event.target.parentElement.classList.remove("focused");
    }
}