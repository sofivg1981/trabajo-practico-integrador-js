console.log ("OK");

let Nombre = document.getElementById("Nombre");

let Apellido = document.getElementById("Apellido");

let alertanombre = document.getElementById("validarnombre");

let alertaapellido = document.getElementById("validarapellido");

let alertaemail = document.getElementById("validaremail");

let botonResumen = document.getElementById("resumen");

let botonBorrar = document.getElementById("borrar");

let cantidad = document.getElementById("amount");

let Categoria = document.getElementById("Categoría");

let Email = document.getElementById("email");


const Ticket = 200;
const Estudiante = Ticket * 0.2;
const Trainee = Ticket * 0.5;
const Junior = Ticket * 0.8;
const PúblicoGeneral = Ticket



function validarnombre() {
    if (Nombre.value.length <3){
        alertanombre.innerHTML = "Ingrese un Nombre válido";        
    }
    else if(Nombre.value.length >3){
        alertanombre.innerHTML = "";
}
    
}


function validarapellido() {
    if (Apellido.value.length <3){
        alertaapellido.innerHTML = "Ingrese un Apellido válido";        
    }
    else if (Apellido.value.length >3){
        alertaapellido.innerHTML = "";
}
   
}

let expregular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

function validaremail() {
    if (!expregular.test(Email.value)){
        
        alertaemail.innerHTML = "Ingrese un E-mail válido";        
    }
    else {
            alertaemail.innerHTML = "";
}

}


function TotalAPagar() {
    if(Categoria.value==0){
            document.getElementById("total").value = "Seleccione una Categoría";
    }
    else if(Categoria.value==1){
            document.getElementById("total").value = "Total a pagar:$" + (Estudiante * cantidad.value);
    }
    else if(Categoria.value==2){
            document.getElementById("total").value = "Total a pagar:$" + (Trainee * cantidad.value);
    }
    else if(Categoria.value==3){
            document.getElementById("total").value = "Total a pagar:$" + (Junior * cantidad.value);
    }
    else if(Categoria.value==4){
            document.getElementById("total").value = "Total a pagar:$" + (PúblicoGeneral * cantidad.value);
    
    }
}

function BorrarTotalAPagar() {
    if(Categoria.value>=1){
            document.getElementById("total").value = "Total a pagar:$";
    }

}

function BorrarCantidad() {
    if(cantidad.value>=2){
            document.getElementById("amount").value = 1;
    }

}

function BorrarCategoria() {
    if(Categoria.value>=1){
            document.getElementById("Categoría").value = 0;
    }

}

botonBorrar.addEventListener("click", BorrarTotalAPagar);

botonBorrar.addEventListener("click", BorrarCantidad);

botonBorrar.addEventListener("click", BorrarCategoria);



botonResumen.addEventListener("click", validarnombre);

botonResumen.addEventListener("click", validarapellido);

botonResumen.addEventListener("click", TotalAPagar);

botonResumen.addEventListener("click", validaremail);
