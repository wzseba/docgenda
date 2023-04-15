//  export const validationsForm = (form)=>{
    
//     let errors = {};
  
//     /**corregir espacios en blanco */
//     const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{3,15}$/;
//     const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

//     /**password */
//     if(form.password.includes(' ')){
//         errors.password = 'No puede contener espacios vacios'
//     }else if(!regexPassword.test(form.password)){
//         errors.password = 'El formato de password debe contener entre 8 y 15 caracteres una mayuscula una minuscula un digito un caracter especial'
//     }

//     /**email */
//     if(form.email?.includes(' ')){
//         errors.email = 'No puede contener espacios vacios'
//     }else if(!regexEmail.test(form.email)){
//         errors.email = 'El formato de email es invalido'
//     }

//     /**nombre */ 
//     if(form.nombre?.includes(' ')){
//       errors.nombre = 'No puede contener espacios vacios'
//     }else if(!regexName.test(form.nombre?.trim())){
//       errors.nombre = 'El campo solo acepta letras y un rango de 3 a 15 caracteres'
//     }
//     /**email */
//     if(form.email?.includes(' ')){
//       errors.email = 'No puede contener espacios vacios'
//     }else if(!regexEmail.test(form.email)){
//       errors.email = 'El formato de email es invalido'
//     }
//     /**telefono */
//     if(form.telefono.includes(' ')){
//         errors.telefono = 'No puede contener espacios vacios'
//       }else if(isNaN(form.telefono)){
//         errors.telefono = 'Solo puede ingresar numeros'
//       }else if(form.telefono.length > 15 || form.telefono.length < 10){
//           errors.telefono = 'El telefono debe tener un rango de 10 a 15'
//       }

//     return errors;
//   }
const nameValidator = (value)=>{

  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{3,15}$/;
  // && !regexName.test(value?.trim())
  return !value?.includes('')
  
}

export {nameValidator}