




const nombre = document.getElementById("Nombres");
const apellido = document.getElementById("Apellido");
const telefono = document.getElementById("Telefono");
const correo = document.getElementById("Correo");
const usuario = document.getElementById("Usuario");
const password = document.getElementById("Password");


const form = document.getElementById("form");
const adv = document.getElementById("advertencia");



// --------------------

form.addEventListener("submit", e=>{
    e.preventDefault()
    let alert = ""
    let mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    let flag = false
    adv.innerHTML = ""
    
    if(nombre.value.length <3){
        alert +=`El nombre no es Valido <br>`
        flag = true
           
    }

    if(apellido.value.length <2){
        alert +=`El Apellido no es Valido <br>`
        flag = true
    }

  
    
    let controlNum = /[0-9]/
    
      if (!(telefono.value.length >= 10 && telefono.value.length <= 12) && !(controlNum.test(telefono))) {
        alert +=`El Numero de Telefono no es Valido <br>`
        flag = true
      }
        



    if(!mail.test(correo.value)){
        alert +=`El eMail no es Valido <br>`
        flag = true
    }

    if (!(usuario.value.length >= 6)){
        alert +=`El usuario debe tener por lo menos 6 caracteres <br>`
        flag = true
    }
    if (!(password.value.length >= 8)){
        alert +=`La contraseña debe tener por lo menos 8 caracteres <br>`
        flag = true
    }
    
    if(!ter1.checked){
        alert +=`Debe aceptar los terminos y condiciones <br>`
        flag = true

    }    
    if(flag){
        adv.innerHTML = alert
    }else{
        
        adv.innerHTML = "Cliente cargado";

        let datos = {
            nombre: nombre.value,
            apellido: apellido.value,
            telefono: telefono.value,
            correo: correo.value,
            usuario: usuario.value,
            password: password.value
        }
        console.log(datos.nombre)

        let destino = 'http://127.0.0.1:5000/api-fenix2/registro'
        enviarDatos(destino, datos)
        

        nombre.value = "";
        apellido.value = "";
        telefono.value = "";
        correo.value = "";
        usuario.value = "";
        password.value = "";
        ter1.checked = false;   
        
    }

    


})

async function enviarDatos(destino, datos) {
    let envio = {
        method: "POST",
        body: JSON.stringify({
        datos: datos
        }),
        headers: {
        "Content-type": "application/json; charset=UTF-8"
        }
    }

    let resultado = await fetch(destino, envio)
                        .then(respuesta => respuesta.json())
                        .then(resultado => resultado)
                        .catch(error => console.warn(error.status));
                        
    //window.location.hash = '#rtaForm';
    // Aguardo que cargue la respuesta, luego la completo
    //sessionStorage.setItem('perfil', 1);
    //setTimeout(respuestaOk, 300, datos, resultado);
    console.log(resultado)
    console.log(datos.nombre)
}

