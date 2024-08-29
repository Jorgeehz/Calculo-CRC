// Autor: Jorge Arrieta
document.addEventListener('DOMContentLoaded', function() {
    const mensajeInput = document.getElementById('mensajet');
    const generadorInput = document.getElementById('generadort');
    const resultadoMensajeElement = document.getElementById('resultadomensaje');
    const resultadoGeneradorElement = document.getElementById('resultadogenerador');

    function polinomioABinario(polinomio) {
        polinomio = polinomio.replace(/\s+/g, ''); 
        const exponentes = polinomio.match(/x\^(\d+)|\d+/g) || []; 
        const grados = exponentes.map(exp => {
            if (exp.startsWith('x^')) {
                return parseInt(exp.substring(2));
            } else {
                return 0; 
            }
        });
        
        const maxGrado = Math.max(...grados);
        const binario = Array(maxGrado + 1).fill(0);
        grados.forEach(exp => {
            binario[maxGrado - exp] = 1;
        });
        return binario.join('');
    }

    document.getElementById('convertir').addEventListener('click', function(event) {
        event.preventDefault();
        const mensaje = mensajeInput.value;
        const generador = generadorInput.value;

        const mensajeBinario = polinomioABinario(mensaje);
        const generadorBinario = polinomioABinario(generador);


        resultadoMensajeElement.innerHTML = `Mensaje en binario: ${mensajeBinario}`;
        resultadoGeneradorElement.innerHTML = `Generador en binario: ${generadorBinario}`;
        resultadoMensajeElement.style.display = 'block';
        resultadoGeneradorElement.style.display = 'block';
    });
});
