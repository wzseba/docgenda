import React from 'react'
import Formulario from '../components/Formulario'

const NuevoPaciente = () => {
  
  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Ingresar Paciente</h1>
      <p className='mt-3'>Completar todos los campos para registrar paciente</p>
    
      <Formulario/>
    
    </>
    
  )
}

export default NuevoPaciente