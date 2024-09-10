document.getElementById('imc-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtém os valores dos campos de entrada
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    // Verifica se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    // Calcula o IMC
    const imc = peso / (altura * altura);

    // Determina a categoria do IMC
    let categoria;
    if (imc < 18.5) {
        categoria = 'Abaixo do peso';
    } else if (imc < 24.9) {
        categoria = 'Peso normal';
    } else if (imc < 29.9) {
        categoria = 'Sobrepeso';
    } else {
        categoria = 'Obesidade';
    }

    // Exibe o resultado
    document.getElementById('imc-valor').textContent = imc.toFixed(2);
    document.getElementById('categoria').textContent = categoria;
});