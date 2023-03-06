import { configureStore } from '@reduxjs/toolkit'
import pacienteReducer from '../features/pacientes/pacienteSlice'

export const store = configureStore({
  reducer: {
    paciente: pacienteReducer
  },
})