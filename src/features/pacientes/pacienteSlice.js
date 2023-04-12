import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = []

export const pacienteSlice = createSlice({
    name: 'pacientes',
    initialState,
    reducers:{
        addPatient: (state, action) => {
            state.push(action.payload)
        },
        deletePatient: (state, action) =>{
            const patienteFound = state.find(paciente => paciente.id === action.payload)
            if(patienteFound){
                state.splice(state.indexOf(patienteFound),1)
            }
        },
        editPatient: (state, action) =>{
            const {id, name, email, telefono, sintomas} = action.payload
            const editPatientFound = state.find(paciente => paciente.id === id)
            if(editPatientFound){
                editPatientFound.name = name,
                editPatientFound.email = email,
                editPatientFound.telefono = telefono,
                editPatientFound.sintomas = sintomas
            }
        }
    }
})

export const { addPatient, deletePatient, editPatient } = pacienteSlice.actions

export default pacienteSlice.reducer

export const getPacientes = createAsyncThunk(
    'users/getPacientes',
    async (paciente, {rejectWithValue}) => {
      try {
        const response = await axios.get('http://localhost:3001/pacientes')
        return response.data
      } catch (error) {
        console.log(error);
        return rejectWithValue(error.response?.data);
      }
    }
  )