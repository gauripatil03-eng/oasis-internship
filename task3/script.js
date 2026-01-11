function convertTemp() {
    const temp = document.getElementById("tempInput").value;
    const unit = document.getElementById("unit").value;
    const result = document.getElementById("result");

    if (temp === "" || isNaN(temp)) {
        result.innerHTML = "❌ Please enter a valid number";
        return;
    }

    let value = parseFloat(temp);
    let output = "";

    if (unit === "celsius") {
        output = `
            Fahrenheit: ${(value * 9/5 + 32).toFixed(2)} °F <br>
            Kelvin: ${(value + 273.15).toFixed(2)} K
        `;
    } 
    else if (unit === "fahrenheit") {
        output = `
            Celsius: ${((value - 32) * 5/9).toFixed(2)} °C <br>
            Kelvin: ${(((value - 32) * 5/9) + 273.15).toFixed(2)} K
        `;
    } 
    else {
        output = `
            Celsius: ${(value - 273.15).toFixed(2)} °C <br>
            Fahrenheit: ${((value - 273.15) * 9/5 + 32).toFixed(2)} °F
        `;
    }

    result.innerHTML = output;
}
