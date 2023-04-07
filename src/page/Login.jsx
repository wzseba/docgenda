import React from 'react'
import { useForm } from '../hooks/useForm'
import { validationsForm } from '../helpers/validator'

const initialForm = {
  email:'',
  password:''
}

const Login = () => {

  const { form, errors, handleChange, handleBlur, handleSubmit } = useForm(initialForm,validationsForm)

  return (
    <div className='flex flex-col h-screen justify-center items-center'>
      <h1 className='text-2xl text-center font-bold uppercase'>Login component</h1>
      <form className="w-80 md:w-1/2 lg:w-1/3 mx-48 shadow-md rounded-lg py-8 px-5 mt-10" onSubmit={handleSubmit}>
        
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
            {errors.email && <p className="text-red-500 ml-1">{errors.email}</p>}
        </div>
    
        <div className="mb-5">
            <label className="block font-bold uppercase text-gray-700">
            Password:
            <input 
            type="password" 
            name='password'
            value={form.password}
            placeholder='Ingrese password'
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            onChange={handleChange}
            onBlur={handleBlur}
            required/>
            </label>
            {errors.password && <p className="text-red-500 ml-1">{errors.password}</p>}
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