

const Pacientes = () => {

  return (
    <div className='md:w-1/2 lg:w-3/5 h-72 mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: <span className='font-normal normal-case'></span></p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Email: <span className='font-normal normal-case'></span></p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta: <span className='font-normal normal-case'></span></p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: <span className='font-normal normal-case'></span></p>

        <div className="flex justify-between mt-5">
          <button
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md"
            // onClick={() => setPaciente(paciente)}
          >Editar</button>
          <button
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md"
            // onClick={handleEliminar}
          >Eliminar</button>
        </div>
    </div>
  )
}

export default Pacientes