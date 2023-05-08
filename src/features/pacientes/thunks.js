import { getAllPacientes, startLoadingPacientes, createPaciente} from './pacienteSlice';
import { pacienteApi } from '../../api/pacienteApi';

export const getPacientes = ()=>{
    return async ( dispatch, getState )=>{
        dispatch( startLoadingPacientes() );
        const { data } = await pacienteApi.get('/pacientes');
        // console.log(data);
        dispatch( getAllPacientes(data) );
    }
}

export const pacientesAdd = (payload)=>{
    return async(dispatch,getState)=>{
        try {
            // dispatch(startLoadingPacientes());
            // console.log('estoy en thunk ',payload);
            // const { data } = await pacienteApi.post('/pacientes',payload);
            
            dispatch(createPaciente(payload));

        } catch (error) {
            console.log(error);
        }
        
    }
}