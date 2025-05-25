function attachGradientEvents() {

    
    
    let gradient = document.getElementById('gradient');
    let result = document.getElementById('result');
    
    gradient.addEventListener('mousemove', mouseMove);

    function mouseMove(e) {
        let prcnt = Math.floor(e.offsetX / 300 * 100);
        result.textContent = prcnt + '%';
    }

}