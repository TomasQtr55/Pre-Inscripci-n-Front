import api from "@/api/axios";
import type { PreinscripcionCrearBody, EstudiosSecundariosBody, ApiResponse } from "@/models/preinscripcion";


export const registrarPreinscripto = async (payload: PreinscripcionCrearBody) => {
    const res = await api.post('/registrarPreInscripto', payload);
    console.log("status: " + res.status);
    return res.data;
}

export const agregarEstudios = async (dni: string, body: EstudiosSecundariosBody) => {
    const url = `preinscripto/${encodeURIComponent(dni)}/estudios`;
    const res = await api.patch(url, body);
    console.log(`su status es ${res.status}`);
    
    return res.data;
}

export const agregarArchivos = async (dni: string, formData: FormData) => {
    const response = await api.post(`preinscripto/${dni}/documentacion`, formData, {
        headers: {'Content-Type': 'multipart/form-data'},
    });
    return response.data
}

export default {
    registrarPreinscripto,
    agregarEstudios,
    agregarArchivos
}