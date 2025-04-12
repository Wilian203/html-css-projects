document.addEventListener('DOMContentLoaded', function(){

    const email = {
        nombre:'',
        numero: '',
        mes:'',
        anio: '',
        cvc: ''
    };

    // varibales
    const formulario = document.getElementById('form');
    const input__nombre = document.getElementById('nombre');
    const input__numeroTarjeta = document.getElementById('numero');
    const input__mes = document.getElementById('mes');
    const input__anio = document.getElementById('anio');
    const input__cvc = document.getElementById('cvc');
    const boton = document.querySelector('.boton');

    const botonGracias = document.querySelector('.gracias .boton'); // Segundo botón Confirm


    // eventos
    input__nombre.addEventListener('input',validar);
    input__numeroTarjeta.addEventListener('input',validar);
    input__mes.addEventListener('input',validar);
    input__anio.addEventListener('input',validar);
    input__cvc.addEventListener('input',validar);
    boton.addEventListener('click',agregarValoresTarjeta);
    botonGracias.addEventListener('click',reiniciarFormulario);

    


    // funcion que detecta lo que el usuario ingreso en el input
    function validar(e){
      if(e.target.value.trim() === ''){
        mostrarAlerta(`The field ${e.target.id} is required`, e.target.parentElement);
        email[e.target.id] = '';
        comprobarEmail();
        return;
      };

      if(e.target.id ==='numero' && !validarInputNumero(e.target.value)){
        mostrarAlerta('This field only accepts numbers', e.target.parentElement);
        email[e.target.id] = '';
        comprobarEmail();
        return;
      };
      
      limpiarAlerta(e.target.parentElement);

        //Asiganar los valores del objeto 
        email[e.target.id] = e.target.value.trim().toLowerCase(); 
        console.log(email); 

        comprobarEmail();
      
    };

    // la referencia ubica el elemento padre de cada input para colocar vada alerta en su posicion
    function mostrarAlerta(mensaje, referencia){
        limpiarAlerta(referencia);
        const error = document.createElement('P');
        error.classList.add('formulario__alerta')
        error.classList.add('m-0')
        error.textContent = mensaje;

        referencia.appendChild(error);
    };


    function limpiarAlerta(referencia){
         // identifacamos la alerta en cada input correspoendiente para que no se repita
         const alerta = referencia.querySelector('.formulario__alerta');
         if(alerta){
             alerta.remove();
         };
    };

    function validarInputNumero(campo){
        const regex = /^[\d\s]+$/;
        const resultado = regex.test(campo);
        return resultado;

    }

    function comprobarEmail(){
        console.log(email)
        if(Object.values(email).includes('')){
            boton.classList.add('opacity-50')
            boton.disabled = true;
            return;
        }
            boton.classList.remove('opacity-50')
            boton.disabled = false;
        
    };


    function agregarValoresTarjeta(){
        
        document.getElementById('nombre-tarjeta').textContent = email.nombre;
        document.getElementById('numero-tarjeta').textContent = email.numero;
        document.getElementById('fecha-tarjeta-1').textContent = email.mes;
        document.getElementById('fecha-tarjeta-2').textContent = email.anio;
        document.getElementById('cvc-tarjeta').textContent = email.cvc;


        formulario.style.display = 'none'
        const gracias = document.querySelector('.gracias');
        gracias.style.display = 'block';
        gracias.style.animation = 'fadeSlideIn 0.6s ease-out forwards';
        
    }

    function reiniciarFormulario() {
        // Limpiar inputs del formulario
        formulario.reset();

        // Resetear objeto email
        for (let campo in email) {
            email[campo] = '';
        }

        // Limpiar tarjeta visual
        document.getElementById('nombre-tarjeta').textContent = 'Jane Appleseed';
        document.getElementById('numero-tarjeta').textContent = '0000 0000 0000 0000';
        document.getElementById('fecha-tarjeta-1').textContent = '00';
        document.getElementById('fecha-tarjeta-2').textContent = '00';
        document.getElementById('cvc-tarjeta').textContent = '000';

        // Mostrar el formulario y ocultar el mensaje de gracias
        document.querySelector('.gracias').style.display = 'none';
        formulario.style.display = 'block';

        // Desactivar el botón nuevamente
        boton.classList.add('opacity-50');
        boton.disabled = true;
    };


});




