import React from 'react'
import Formulario from '../components/Formulario'

const NuevoPaciente = () => {
  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Ingresar Paciente</h1>
      <p className='mt-3'>Completar todos los campos para registrar paciente</p>
    
      <div className='shadow rounded-md md:w-1/3 mx-auto mt-10'>
        <Formulario/>
      </div>
      
    </>
    
  )
}

export default NuevoPaciente