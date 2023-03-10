import React from 'react'
import { useSelector } from 'react-redux'
import Formulario from '../components/Formulario'
import Pacientes from '../components/Pacientes'


const NuevoPaciente = () => {
  const paciente = useSelector(state => state.paciente);
  
  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Ingresar Paciente</h1>
      <p className='mt-3'>Completar todos los campos para registrar paciente</p>
    
      <Formulario/>
    
    </>
    
  )
}

export default NuevoPaciente