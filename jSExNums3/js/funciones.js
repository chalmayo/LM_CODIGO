function comprobar() {
    var base = parseInt(document.getElementById("base").value);
    var exponente = parseInt(document.getElementById("exponente").value);

    var resultado = Math.pow(base, exponente);
   

    document.getElementById("res").innerHTML = "La operación da " + resultado;
}