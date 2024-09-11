// Autor: Jorge Arrieta
document.addEventListener('DOMContentLoaded', function() {
document.getElementById('mensaje').addEventListener('input', function(event) {
    this.value = this.value.replace(/[^01]/g, '');
});
document.getElementById('generador').addEventListener('input', function(event) {
    this.value = this.value.replace(/[^01]/g, '');
});
    const messageInput = document.getElementById('mensaje');
    const generatorInput = document.getElementById('generador');
    const crcfound = document.getElementById('crcfound');
    const resultadoElement = document.getElementById('resultadocrc');
    const hexadecimal = document.getElementById('hexadecimal');

    function crcDivision(message, generator) {
        message = message.split('');
        generator = generator.split('');
        
        const genLength = generator.length;
        
        message = message.concat(Array(genLength - 1).fill('0'));
        
        for (let i = 0; i <= message.length - genLength; i++) {
            if (message[i] === '1') {
                for (let j = 0; j < genLength; j++) {
                    message[i + j] = (message[i + j] ^ generator[j]).toString();
                }
            }
        }
        
        const crc = message.slice(- (genLength - 1)).join('');
        return crc;
    }
    function binarioAHex(binario) {

        let decimal = parseInt(binario, 2);
        let hex = decimal.toString(16);
        return hex.toUpperCase();
    }
    
    
    document.getElementById('calcular').addEventListener('click', function(event) {
        event.preventDefault(); 

        const message = messageInput.value;
        const generator = generatorInput.value;
        
        

        if (message === "" || generator === "" ) {
            resultadoElement.innerHTML = "Por favor, ingrese valores válidos.";
            return;
        } 
        const crcResult = crcDivision(message, generator);     
        resultadoElement.innerHTML = `Mensaje Final: ${message}${crcResult}`;
        crcfound.innerHTML = `Tu CRC es: ${crcResult}`;
        const mensajecompleto = message + crcResult;
        const hexresult = binarioAHex(mensajecompleto);
        hexadecimal.innerHTML = `Hexadecimal: ${hexresult}`; 

        resultadocrc.style.display = 'block';
        crcfound.style.display = 'block';
        hexadecimal.style.display = 'block';


    });
    });

