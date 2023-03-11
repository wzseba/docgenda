 export const validationsForm = (form)=>{
    let errors = {};
  
    /**corregir espacios en blanco */
    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{3,15}$/;
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    /**nombre */ 
    if(form.name.includes(' ')){
      errors.name = 'No puede contener espacios vacios'
    }else if(!regexName.test(form.name.trim())){
      errors.name = 'El campo solo acepta letras y un rango de 3 a 15 caracteres'
    }
    /**email */
    if(form.email.includes(' ')){
      errors.email = 'No puede contener espacios vacios'
    }else if(!regexEmail.test(form.email)){
      errors.email = 'El formato de email es invalido'
    }
    /**telefono */
    if(form.telefono.includes(' ')){
        errors.telefono = 'No puede contener espacios vacios'
      }else if(isNaN(form.telefono)){
        errors.telefono = 'Solo puede ingresar numeros'
      }else if(form.telefono.length > 15 || form.telefono.length < 10){
          errors.telefono = 'El telefono debe tener un rango de 10 a 15'
      }

    return errors;
  }