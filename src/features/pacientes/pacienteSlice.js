import { createSlice } from "@reduxjs/toolkit";

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