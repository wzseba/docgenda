import { useSelector,useDispatch } from "react-redux"
import { useEffect } from "react";
import Pacientes from "../components/Pacientes"
import SearchBar from "../components/SearchBar";

import { getPacientes } from "../features/pacientes/thunks";

const Index = () => {

 const {pacientes} = useSelector(state => state.paciente);

 const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPacientes());
  },[])
  
  return ( 

    <>
    <h1 className="font-black text-4xl text-blue-800">Pacientes</h1>
    <p className="mt-3">Administra tus pacientes</p>
    <SearchBar/>

    {
      pacientes?.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="p-2">Paciente</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          
            {
              pacientes.map( paciente => (
                <tbody key={paciente.id}>
                  <Pacientes
                    paciente={paciente}
                  />
                </tbody>
              ))
            }
          
        </table>
      ) : (
        <p className="text-center mt-10">No hay pacientes aun</p>
      )
    }
  
  </>

  )
}

export default Index