function comprobar() {
    var num1 = parseInt(document.getElementById("num2").value);
    var num2 = parseInt(document.getElementById("num2").value);

    var suma = "";
    var resta = "";
    var division = "";
    var multiplicacion = "";
    
    var resultado = eval();

    function suma1(num1,num2) {
       if (num1 + num2){
        document.getElementById("res").innerHTML = "La operación da " + resultado;
       }
    
    }
   

    document.getElementById("res").innerHTML = "La operación da " + resultado;
}