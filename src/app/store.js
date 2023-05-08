import { configureStore } from '@reduxjs/toolkit'
import { pacienteSlice } from '../features/pacientes/pacienteSlice'
import { authSlice } from '../features/auth/authSlice'

export const store = configureStore({
  reducer: {
    paciente: pacienteSlice.reducer,
    auth: authSlice.reducer
  },
})