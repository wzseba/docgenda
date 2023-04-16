import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    pacientes: [],
    addPacienteStatus: '',
    addPacientesError: ''
}

export const pacientesAdd = createAsyncThunk(
    "pacientes/pacientesAdd",
    async (pacientes,{ rejectWithValue })=>{
        try {
            const response = await axios.post('http://localhost:3001/pacientes',pacientes);
            console.log('estoy en pacienteSlice',response.data);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response?.data);
        }
    }
)

export const pacienteSlice = createSlice({
    name: 'pacientes',
    initialState,
    reducers:{
        // addPatient: (state, action) => {
        //     state.push(action.payload)
        // },
        // deletePatient: (state, action) =>{
        //     const patienteFound = state.find(paciente => paciente.id === action.payload)
        //     if(patienteFound){
        //         state.splice(state.indexOf(patienteFound),1)
        //     }
        // },
        // editPatient: (state, action) =>{
        //     const {id, name, email, telefono, sintomas} = action.payload
        //     const editPatientFound = state.find(paciente => paciente.id === id)
        //     if(editPatientFound){
        //         editPatientFound.name = name,
        //         editPatientFound.email = email,
        //         editPatientFound.telefono = telefono,
        //         editPatientFound.sintomas = sintomas
        //     }
        // }
    },
    extraReducers:{
        [pacientesAdd.pending]: (state, action)=>{
            return {
                ...state,
                addPacienteStatus: 'pending',
                addPacientesError: ''
            }
        },
        [pacientesAdd.fulfilled]: (state, action)=>{
            return {
                ...state,
                pacientes: [action.payload, ...state.pacientes],
                addPacienteStatus: 'success',
                addPacientesError: ''
            }
        },
        [pacientesAdd.rejected]: (state, action)=>{
            return {
                ...state,
                addPacienteStatus: 'rejected',
                addPacientesError: action.payload
            }
        }
    }
})

export const { addPatient, deletePatient, editPatient } = pacienteSlice.actions

export default pacienteSlice.reducer
