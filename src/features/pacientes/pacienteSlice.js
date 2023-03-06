import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id:"1",
        name:"pedro",
        sintomas:"le duele la panza"
    },
    {
        id:"2",
        name:"jose",
        sintomas:"le duele la muela"
    }
]

export const pacienteSlice = createSlice({
    name: 'pacientes',
    initialState,
    reducers:{}
})

export default pacienteSlice.reducer