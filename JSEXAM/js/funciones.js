function validar(campo) {
    if (campo.value == null || campo.value == "" || campo.value.length == 0) {
        
        mostrarError("spnombre", "Error: Nombre vacío");
    } else {
       
        borrarError("spnombre");
    }
 }
 
 function mostrarError(nombreSpan, mensaje) {
     document.getElementById(nombreSpan).innerHTML = mensaje;
 }
 
 function borrarError(nombreSpan) {
     document.getElementById(nombreSpan).innerHTML = "";
 }
 
 function validarFormulario() {
     var cadenaError = "";
 
     var login = document.getElementById("login");
     if (login.value == null || login.value.length == 0) {
         cadenaError = cadenaError + "<li>Error: login vacío</li>";
     }
 
     var tel = document.getElementById("telefono");
     if (tel.value == null || postal.value.length == 0) {
         cadenaError = cadenaError + "<li>Error: telefono vacío</li>";
     } else if (tel.value.length != 5) {
         cadenaError = cadenaError + "<li>Error: telefono de 9 cifras</li>";
     } else if (!tel.value.startsWith(9) && !tel.value.startsWith(6)) {
         cadenaError = cadenaError + "<li>Error: telefono 9 o 6</li>";
     } 

     var web = document.getElementById("web");
    if (!String(web).startsWith("www")) {
        texto += "<li>Web debe comenzar por www</li>";
        correcto = false;
    } else (!String(web).endsWith(".es")) {
        texto += "<li>Web debe terminar por .es</li>";
        correcto = false;

    var aficiones = document.getElementById("aficiones");

    
 
     if (cadenaError.length == 0) {
         return true;
     } else {
         document.getElementById("capaerrores").style.visibility = "visible";
         mostrarError("sperrores", cadenaError);
         return false;
     }
 }
 }




 function comprobar() {
    document.getElementById("enl1").style = "bold";
    document.getElementById("enl2").style.fontSize = 11;
    document.getElementById('enl3').style.color = '#000000';
 }





