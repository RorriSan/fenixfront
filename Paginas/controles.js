




const nombre = document.getElementById("Nombres");
const apellido = document.getElementById("Apellido");
const telefono = document.getElementById("Telefono");
const correo = document.getElementById("Correo");


const form = document.getElementById("form");
const adv = document.getElementById("advertencia");


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

    if(!ter1.checked){
        alert +=`Debe aceptar los terminos y condiciones <br>`
        flag = true

    }    
    if(flag){
        adv.innerHTML = alert
    }else{
        
        adv.innerHTML = "Enviado";

        

        nombre.value = "";
        apellido.value = "";
        telefono.value = "";
        correo.value = "";
        ter1.checked = false;   }

   
        
})