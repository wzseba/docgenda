import { useDispatch, useSelector } from "react-redux"

// import { deletePatient, editPatient, getPacientes } from "../features/pacientes/pacienteSlice";
// import { useEffect } from "react";

const Pacientes = () => {

//   const dispatch = useDispatch();

//   const pacientes = useSelector(state => state.paciente);
//   console.log('componente pacientes ', pacientes);

//   useEffect(()=>{
//     dispatch(getPacientes());
//   },[dispatch])

return (
  <tr className="border-b">
      <td className="p-6 space-y-2 text-center">
          <p className="text-2xl text-gray-800">nombre paciente</p>
          
      </td>
      <td className="p-6 text-center">
          <p className="text-gray-600"> <span className="text-gray 800 uppercase font-bold">Email: </span>email paciente </p>
          <p className="text-gray-600"> <span className="text-gray 800 uppercase font-bold">Tel: </span>telefono paciente</p>
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
