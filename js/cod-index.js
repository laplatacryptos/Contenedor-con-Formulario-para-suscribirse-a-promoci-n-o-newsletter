const contenedor = document.querySelector('#contenedor');
const confirmacion = document.querySelector('#confirmacion');
const btnSuscribe = document.querySelector('#btn-suscribe');
const btnDismiss = document.querySelector('#btn-dismiss');
const ingresaCorreo = document.querySelector('#email');
const correo = document.querySelector('#correo');
const errorMailInvalido = document.querySelector('#error-mailInvalido');

//Funcion en caso de ingresar mal el mail
function error(){
    Object.assign(ingresaCorreo.style,{
        backgroundColor: '#ffe8e6',
        borderColor: '#f05171',
        color: '#f05171',
        
});
    errorMailInvalido.style.display = 'block';
}
//Limpia el input mail
function limpiarInputMail(){
    Object.assign(ingresaCorreo.style,{
        backgroundColor: 'white',
        borderColor: 'black',
        color: 'black',
        
});
    errorMailInvalido.style.display = 'none';
}


btnSuscribe.addEventListener(
    'click', function(){
            // Verificamos si el campo de correo está vacío o mal escrito
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(ingresaCorreo.value.trim())) {
        //alert('Please enter a valid email address.');
        error();
        return; // Evitamos que continúe si el correo es inválido
    }
        correo.textContent = ingresaCorreo.value;
        contenedor.style.display = 'none';
        confirmacion.style.display = 'block';
        
    }
)
btnDismiss.addEventListener(
    'click', function(){
        contenedor.style.display = 'flex';
        confirmacion.style.display = 'none';
        limpiarInputMail();
        ingresaCorreo.value = "";
    }
)
ingresaCorreo.addEventListener(
    'click', function(){
        if (!emailRegex.test(ingresaCorreo.value.trim())) {
            //alert('Please enter a valid email address.');
            error();
            return; // Evitamos que continúe si el correo es inválido
        }else {limpiarInputMail();
        }      
    }
)