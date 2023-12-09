const formulario = document.getElementById('formulario');

const inputs = document.querySelectorAll('#formulario input');

const expresionRegular = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    comentario: /^[a-zA-ZÀ-ÿ\s]{1,300}$/
}

const envioExitoso = {
    nombre: true,
    apellido: true,
    email: true,
    telefono: true,
    comentario: true
}


const validacion = (e) =>{
    switch (e.target.name){
        case 'nombre':
            // validacionTotal(expresionRegular.nombre, e.target, 'nombre');
            if(expresionRegular.nombre.test(e.target.value)){
                document.getElementById('wrap-nombre').classList.remove('wrap-formulario-incorrecto');
                document.getElementById('wrap-nombre').classList.add('wrap-formulario-correcto');
                document.querySelector('#wrap-nombre .formulario-error').classList.remove('formulario-error-activo');
                envioExitoso[e.target.name] = true;
            }else {
                document.getElementById('wrap-nombre').classList.add('wrap-formulario-incorrecto');
                document.getElementById('wrap-nombre').classList.remove('wrap-formulario-correcto');
                document.querySelector('#wrap-nombre .formulario-error').classList.add('formulario-error-activo');
                envioExitoso[e.target.name] = false;
            }
        
        break;

        case 'apellido':
            if(expresionRegular.apellido.test(e.target.value)){
                document.getElementById('wrap-apellido').classList.remove('wrap-formulario-incorrecto');
                document.getElementById('wrap-apellido').classList.add('wrap-formulario-correcto');
                document.querySelector('#wrap-apellido .formulario-error').classList.remove('formulario-error-activo');
                envioExitoso[e.target.name] = true;
            }else {
                document.getElementById('wrap-apellido').classList.add('wrap-formulario-incorrecto');
                document.getElementById('wrap-apellido').classList.remove('wrap-formulario-correcto');
                document.querySelector('#wrap-apellido .formulario-error').classList.add('formulario-error-activo');
                envioExitoso[e.target.name] = false;
            }
        
        break;

        case 'email':
            if(expresionRegular.email.test(e.target.value)){
                document.getElementById('wrap-email').classList.remove('wrap-formulario-incorrecto');
                // document.getElementById('wrap-apelido').classList.add('wrap-formulario-correcto');
                document.querySelector('#wrap-email .formulario-error').classList.remove('formulario-error-activo');
                envioExitoso[e.target.name] = true;
            }else {
                document.getElementById('wrap-email').classList.add('wrap-formulario-incorrecto');
                document.getElementById('wrap-email').classList.remove('wrap-formulario-correcto');
                document.querySelector('#wrap-email .formulario-error').classList.add('formulario-error-activo');
                envioExitoso[e.target.name] = false;
            }
            
        break;
        case 'telefono':
            if(expresionRegular.telefono.test(e.target.value)){
                document.getElementById('wrap-telefono').classList.remove('wrap-formulario-incorrecto');
                document.getElementById('wrap-telefono').classList.add('wrap-formulario-correcto');
                document.querySelector('#wrap-telefono .formulario-error').classList.remove('formulario-error-activo');
                envioExitoso[e.target.name] = true;
            }else {
                document.getElementById('wrap-telefono').classList.add('wrap-formulario-incorrecto');
                document.getElementById('wrap-telefono').classList.remove('wrap-formulario-correcto');
                document.querySelector('#wrap-telefono .formulario-error').classList.add('formulario-error-activo');
                envioExitoso[e.target.name] = false;
            }
            
        break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validacion);
    input.addEventListener('blur', validacion);

    });


// Evitar que se envie el formulario antes de ser completado
formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    const terminos = document.getElementById('terminos');
    if(envioExitoso.nombre && envioExitoso.apellido && envioExitoso.email && envioExitoso.telefono && envioExitoso.comentario && terminos.checked ){
        formulario.reset();

        document.getElementById('mensaje-exito').classList.add('mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('mensaje-exito').classList.remove('mensaje-exito-activo');
        }, 4000);
    
    }else{
        document.getElementById('formulario-mensaje').classList.add('formulario-mensaje-activo');
        setTimeout(() => {
            document.getElementById('formulario-mensaje').classList.remove('formulario-mensaje-activo');
        }, 3000)
        
    }
});