import { useState } from "react";
import { addPatient } from "../features/pacientes/pacienteSlice";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


export const useForm = (initialForm,validateForm)=>{

   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [form,setForm] = useState(initialForm);
   const [errors,setErrors] = useState({});

   /**manejadores de eventos */

   const handleChange = (e)=>{
    const {name, value} = e.target;

    setForm({
        ...form,
        [name]:value
    })
   }

   const handleBlur = (e)=>{
    handleChange(e);
    /** Setea el error de cada propiedad del objeto form*/
    setErrors(validateForm(form))
   }

   const handleSubmit = (e)=>{
    e.preventDefault();
    setErrors(validateForm(form));
    
    if(Object.keys(errors).length === 0){
        dispatch(addPatient({
            ...form,
            id: uuid()
        }));
        alert('Paciente ingresado con exito');
        
        /**Se formatea estado */
        setForm(initialForm);

        /**Redireccion a pacientes */
        navigate("/");
    }else{
        return;
    }
   }

   return {
    form,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
   }
}