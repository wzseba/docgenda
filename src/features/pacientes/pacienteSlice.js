import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    pacientes: [],
    isLoading: false
}

export const pacienteSlice = createSlice({
    name: 'pacientes',
    initialState,
    reducers:{
        startLoadingPacientes: (state,/* action */)=>{
            state.isLoading = true
        },
        getAllPacientes: (state, action)=>{
            state.isLoading = false;
            state.pacientes = action.payload;
        },
        createPaciente: (state, action)=>{
            console.log('estoy en createPaciente ',action.payload);
            state.pacientes.push(action.payload);
        }
    }
   
})

export const { startLoadingPacientes, getAllPacientes, createPaciente} = pacienteSlice.actions

// export default pacienteSlice.reducer
