function attachEventsListeners() {
    Array.from(document.querySelectorAll('[type="button"]'))
         .forEach((b) => b.addEventListener('click', onClick));

    const btns = {
        daysBtn:    i => +i * 24 * 60 * 60,
        hoursBtn:   i => +i * 60 * 60,
        minutesBtn: i => +i * 60,
        secondsBtn: i => +i,
    };

    function onClick(e) {
        const input = e.target.previousElementSibling.value;
        const secs = btns[e.target.id](input);

        const mins = secs / 60;
        const hours = mins / 60;
        const days = hours / 24;

        document.getElementById('days').value = days;
        document.getElementById('hours').value = hours;
        document.getElementById('minutes').value = mins;
        document.getElementById('seconds').value = secs;
    }
}
