function calcularEdad() {
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var fecha = document.getElementById("fecha").value;

    if (edad!="" || edad.toString().length > 0) {
        var dias = edad *365

        document.getElementById("resultado").innerHTML = "Buenas tardes "
        + nombre + ". Usted tiene " + edad + " años, que son "
        + dias + " dias. Gracias";
    } else {
        var fechaInicio = new Date(fecha).getTime();
        var fechaFin    = new Date().getTime();

        var diff = fechaFin - fechaInicio;

        var dias = Math.floor(diff/(1000*60*60*24));
        document.getElementById("resultado").innerHTML = "Buenas tardes "
            + nombre + ". Usted tiene " + dias + " dias de edad. Gracias"
    }

}