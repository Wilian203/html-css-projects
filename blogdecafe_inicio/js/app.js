document.addEventListener('DOMContentLoaded',function(){

//objeto para guardar los datos
const datos ={
    nombre: '',
    email: '',
    mensaje:''
};

// Seleccionar las variables
const inputNombre = document.querySelector('#nombre');
const inputEmail = document.querySelector('#email');
const inputMensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');


// eventos
inputNombre.addEventListener('input',leerDatos);
inputEmail.addEventListener('input',leerDatos);
inputMensaje.addEventListener('input',leerDatos);

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    // obtenemos la informacion de los inputs guardada en el objeto
    const {nombre,email,mensaje} = datos;
    
    // validamos que ningunos de los campos esten vacios
    if(nombre === '' || email === '' || mensaje === ''){
        // si cada input esta vacio le mostramos un mensaje al usuaio para indicarles que debe llenar todos los campos
        mostrarAlerta('Debes llenar todos los campos',true);
        return;
    };

    // si todos los campos estan correctamentes
    mostrarAlerta('Su solicitud a sido enviada de manera Extisosa!!!')


});

// funciones
function leerDatos(e){
    datos[e.target.id] = e.target.value;
};

function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent= mensaje
    formulario.appendChild(alerta)
    
    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('valido');

        // limpiamos el formulario
        inputNombre.value = '';
        inputEmail.value = '';
        inputMensaje.value = ''
    };

    //Despues de 5seg elmimanos el mensaje de error 
   setTimeout(()=>{
        alerta.remove();
    },5000)

};


});