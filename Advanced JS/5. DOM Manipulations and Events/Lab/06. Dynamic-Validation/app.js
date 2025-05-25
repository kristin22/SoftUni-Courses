function validate() {
    let inputEmail = document.getElementById('email');
    inputEmail.addEventListener('change', onChange);
    let validator = /[a-z]+@[a-z]+\.[a-z]+/gm

    function onChange() {
        validator.test(inputEmail.value) === true ? inputEmail.classList.remove("error")
        : (inputEmail.classList.remove("error"), inputEmail.classList.add("error"));
    }
}