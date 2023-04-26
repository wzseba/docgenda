import axios from "axios";

export const pacienteApi = axios.create({
    baseURL: 'http://localhost:3001'
})