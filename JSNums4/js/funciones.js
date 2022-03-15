var aleatorio = parseInt(Math.random() * 10) + 1;


function calcular() {
    var num1 = parseInt(document.getElementById("num1").value);

    var resultado = "";

    if (num1 > aleatorio) {
        resultado = "Tu numero es mayor";
    } else if (num1 < aleatorio) {
        resultado = "Tu numero es menor";
    } else {
        resultado = "Has acertado!!!";
    }

    document.getElementById("res").innerHTML = resultado;
}