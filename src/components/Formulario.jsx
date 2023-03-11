
import { useDispatch } from "react-redux";
import { validationsForm } from "../helpers/validator";
import { useForm } from "../hooks/useForm";

const initialForm = {
    name:'',
    email:'',
    telefono: '',
    sintomas:''
}

const Formulario = () => {
    const dispatch = useDispatch();
    const {
      form,
      errors,
      handleChange,
      handleBlur,
      handleSubmit
    } = useForm(initialForm,validationsForm,dispatch)
  
  
    return (
      
    <form className="md:w-1/2 lg:w-2/5 mx-5 shadow-md rounded-lg py-8 px-5 mb-10" onSubmit={handleSubmit}>
        <div className="mb-5">
            <label className="block font-bold uppercase text-gray-700">
            Nombre:
            <input 
            type="text" 
            name='name'
            value={form.name}
            placeholder='Ingrese Nombre'
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            onChange={handleChange}
            onBlur={handleBlur}
            required/>
            </label>
        {errors.name && <p>{errors.name}</p>}
        </div>
    
        <div className="mb-5">
            <label className="block font-bold uppercase text-gray-700">
            Email:
            <input 
            type="text" 
            name='email'
            value={form.email}
            placeholder='Ingrese Email'
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            onChange={handleChange}
            onBlur={handleBlur}
            />
            </label>
            {errors.email && <p>{errors.email}</p>}
        </div>
    
        <div className="mb-5">
            <label className="block font-bold uppercase text-gray-700">
            Telefono:
            <input 
            type="tel" 
            name='telefono'
            value={form.telefono}
            placeholder='Ingrese Telefono'
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            onChange={handleChange}
            onBlur={handleBlur}
            required/>
            </label>
            {errors.telefono && <p>{errors.telefono}</p>}
        </div>
        
        <div className="mb-5">
            <label className="block font-bold uppercase text-gray-700">
            Sintomas:
            <textarea 
            name='sintomas'
            cols="30"
            rows="8"
            value={form.sintomas}
            placeholder='Descripcion de sintomas'
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md resize-none"
            onChange={handleChange}
            onBlur={handleBlur}
            />
            </label>
        </div>
        
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value="ingresar paciente"
        />
    </form>
      
    )
  }
  
  export default Formulario