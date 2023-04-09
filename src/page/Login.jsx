import { useEffect } from 'react';
import { useForm } from 'react-hook-form';


const Login = () => {
 
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful }} = useForm()

  const loginUser = (data)=>{
    
    console.log('enviado data..', data);
    
  }

  useEffect(() => {
    if(isSubmitSuccessful){
      reset();
    }
  }, [reset, isSubmitSuccessful])
  

  return (
    <div className='flex flex-col h-screen justify-center items-center'>
      <h1 className='text-2xl text-center font-bold uppercase'>Login component</h1>
      <form onSubmit={handleSubmit(loginUser)} className="w-80 md:w-1/2 lg:w-1/3 mx-48 shadow-md rounded-lg py-8 px-5 mt-10" >
        
        <div className="mb-5">
            <label className="block font-bold uppercase text-gray-700">
            Email:
            </label>

            <input 
            type="text" 
            {...register('email', { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })}
            placeholder='Ingrese Email'
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
            {errors.email?.type === 'required' && <small className="text-red-500 ml-1">El campo no puede ir vacio</small>}
            {errors.email?.type === 'pattern' && <small className="text-red-500 ml-1">El formato de email es incorrecto</small>}
        </div>
    
        <div className="mb-5">
            <label className="block font-bold uppercase text-gray-700">
            Password:
            </label>

            <input 
            type="password" 
            {...register('password',{ required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/})}
            placeholder='Ingrese password'
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
            
            {errors.password?.type === 'required' && <p className="text-red-500 ml-1">El campo no puede ir vacio</p>}
            {errors.password?.type === 'pattern' && <p className="text-red-500 ml-1">El formato de password debe contener entre 8 y 15 caracteres una mayuscula una minuscula un digito un caracter especial</p>}
        </div>
        
        <input
          type="submit"
          className="bg-gray-700 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value="Ingresar"
        />
      </form>
    </div>
    
  )
}

export default Login