function encodeAndDecodeMessages() {
    const [encodeField, decodeField] = document.querySelectorAll('textarea')
    const [encodeButton, decodeButton] = document.querySelectorAll('button');
    
    encodeButton.addEventListener('click', onClick) 
    decodeButton.addEventListener('click', onClick) 
    
    function onClick(event) {
        if(event.target.textContent.includes('Encode')) {
            decodeField.value = transformer(encodeField.value, 'encode')
            encodeField.value = ''
        } else {
            decodeField.value = transformer(decodeField.value, 'decode')
        }
    }

    const transformer = (msg, codeType) => {
        return msg.split('').map(ch => {
            return String.fromCharCode(
                (codeType === 'encode') ? ch.charCodeAt(0) + 1 : ch.charCodeAt(0) - 1
            )
        }).join('');
    }

}   

