
const Pacientes = ({paciente}) => {


return (
  <tr key={paciente.id} className="border-b">
      <td className="p-6 space-y-2 text-center">
          <p className="text-2xl text-gray-800">{paciente.nombre}</p>
          
      </td>
      <td className="p-6 text-center">
          <p className="text-gray-600"> <span className="text-gray 800 uppercase font-bold">Email: </span>{paciente.email}</p>
          <p className="text-gray-600"> <span className="text-gray 800 uppercase font-bold">Tel: </span>{paciente.telefono}</p>
      </td>
      <td className="p-6 flex items-center justify-evenly flex-col gap-3">
          <button
              type="button"
              className="text-blue-600 w-fit hover:text-blue-700 uppercase font-bold text-xs"
              // onClick={()=> navigate(`/paciente/${id}/editar`)}
          >
              Ver paciente
          </button>
         
          <button
              type="submit"
              className="text-red-600 w-fit hover:text-red-700 uppercase font-bold text-xs"
          >
              Eliminar
          </button>
      </td>
  </tr>
)
}

export default Pacientes
