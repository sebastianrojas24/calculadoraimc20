function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value) / 100; // Convertir altura a metros

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert('Por favor, ingrese valores válidos para peso y altura.');
        return;
    }
    const imc = peso / (altura * altura);
    let estado = '';
    if (imc < 18.5) {
        estado = 'Bajo de peso';
    } else if (imc < 24.9) {
        estado = 'Normal';
    } else if (imc < 29.9) {
        estado = 'Sobrepeso';
    } else {
        estado = 'Obeso';
    }
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `Su IMC es: ${imc.toFixed(2)}. Estado: ${estado}`;
}
document.getElementById('imc-form').addEventListener('submit', function (event) {
    event.preventDefault(); 
    calcularIMC();
});
