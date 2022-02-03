function iniciar() {
    //alert(document.getElementById("usuario").value);
    /*var usu = prompt("Introduzca nombre:");
    alert("Hola Chul" + usu);*/

    /*var usu = prompt("Introduzca nombre:");
    document.getElementById("texto").innerHTML = "Hola" + usu;
    document.getElementById("texto").style = "font-weight: bold";*/

    /*var radios = document.getElementsByName("valores");
    for (let i = 0; i < radios.length; i++) {
        alert(radios[i].value);
    }*/

    document.getElementsByTagName("p")[0].innerHTML = "PrimerP";
}

function mostrarMensaje() {
    document.getElementById("texto").innerHTML = "Hola";
    document.getElementById("texto").className = "bordeYcolor";
}

function ocultar() {
    document.getElementById("principal").style = "display: none";
}

function mostrar() {
    document.getElementById("principal").style = "display: block";
}

window.addEventListener("load",iniciar,false);
