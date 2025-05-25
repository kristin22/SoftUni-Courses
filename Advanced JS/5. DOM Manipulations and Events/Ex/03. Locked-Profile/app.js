function lockedProfile() {
    const btns = Array.from(document.getElementsByTagName('button'));

    btns.forEach(btn => {
        btn.addEventListener('click', showInfo);
    });

    function showInfo(event) {
        let isUnlocked = event.target.parentElement.children[4].checked;
        const hiddenText = event.target.previousElementSibling;

        if (isUnlocked) {
            let btn = event.currentTarget;

            if (btn.textContent === "Show more") {
                hiddenText.style.display = 'block';
                btn.textContent = 'Hide it';
            } else if (btn.textContent === "Hide it") {
                hiddenText.style.display = 'none';
                btn.textContent = 'Show more';
            }
        }
    }

}