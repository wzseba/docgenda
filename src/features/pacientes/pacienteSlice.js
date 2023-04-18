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
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(pacientesAdd.pending,(state)=>{
           state.addPacienteStatus = 'loading'
        })
        .addCase(pacientesAdd.fulfilled ,(state, action)=>{
          
            state.pacientes= [action.payload, ...state.pacientes],
            state.addPacienteStatus= 'success',
            state.addPacientesError= ''
        
        })
        .addCase(pacientesAdd.rejected,(state, action)=>{
            
            state.addPacienteStatus= 'rejected',
            state.addPacientesError= action.payload
            
        })
    }
})

export const { addPatient, deletePatient, editPatient } = pacienteSlice.actions

export default pacienteSlice.reducer
