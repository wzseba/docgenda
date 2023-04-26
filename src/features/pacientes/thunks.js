import { getAllPacientes, startLoadingPacientes} from './pacienteSlice';
import { pacienteApi } from '../../api/pacienteApi';

export const getPacientes = ()=>{
    return async ( dispatch, getState )=>{
        dispatch( startLoadingPacientes() );
        const { data } = await pacienteApi.get('/pacientes');
        console.log(data);
        dispatch( getAllPacientes(data) );
    }
}