 export const validationsForm = (form)=>{
    let errors = {};
  
    /**corregir espacios en blanco */
    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{3,15}$/;
    /**nombre */ 
    if(form.name.includes(' ')){
      errors.name = 'No puede contener espacios vacios'
    }else if(!regexName.test(form.name.trim())){
      errors.name = 'El campo solo acepta letras y un rango de 3 a 15 caracteres'
    }
    /**email */
    if(!form.minheight.trim()){
      errors.minheight = 'No puede ir vacio'
    }else if(Number(form.minheight) > Number(form.maxheight)){
      errors.minheight = 'El formato de email es invalido'
    }
    /**telefono */
    if(!form.life_span.trim()){
        errors.life_span = 'No puede ir vacio'
      }else if(Number(form.life_span) < 1 || Number(form.life_span) > 15){
        errors.life_span = 'El telefono debe tener un rango de 10 a 15'
    }

    return errors;
  }