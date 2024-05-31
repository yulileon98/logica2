function convertirTemperatura() {
    let temperaturaCelsius = parseFloat(document.getElementById("tempInput").value);

    // Verificar si la entrada es un número
    if (isNaN(temperaturaCelsius)) {
        alert("Por favor, ingrese un número válido para la temperatura.");
        return;
    }

    let temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;
    let temperaturaKelvin = temperaturaCelsius + 273.15;

    // Mostrar resultados en el DOM
    document.getElementById("resultado").innerHTML = `
      <p>Grados Fahrenheit: ${temperaturaFahrenheit.toFixed(2)}</p>
      <p>Grados Kelvin: ${temperaturaKelvin.toFixed(2)}</p>
    `;
}
