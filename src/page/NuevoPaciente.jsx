import React from 'react'
import Formulario from '../components/Formulario'
import Pacientes from '../components/Pacientes'


const NuevoPaciente = () => {
  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Ingresar Paciente</h1>
      <p className='mt-3'>Completar todos los campos para registrar paciente</p>
    
      <div className='mt-12 md:flex'>
        <Formulario/>
        <Pacientes/>
      </div>
      
    </>
    
  )
}

export default NuevoPaciente