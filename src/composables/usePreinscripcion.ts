import { ref } from "vue";
import type { PreinscripcionCrearBody, EstudiosSecundariosBody } from "@/models/preinscripcion";
import * as preinscService from '@/services/service'

export function usePreinscripcion() {

    const loading = ref(false)
    const error = ref<string | null>(null);

    const success = ref<string | null>(null);


    const registrar = async (payload: PreinscripcionCrearBody) => {
        loading.value = true;
        error.value = null;
        success.value = null

        try {
            const res = await preinscService.registrarPreinscripto(payload);
            success.value = res?.message || 'registrado correctamente'
            return res
        } catch (err: any) {
            error.value = err?.message || 'Error al regisrar'
            throw err;
        } finally {
            loading.value = false
        }
    };

    const agregarEstudios = async (dni: string, body: EstudiosSecundariosBody) => {
        loading.value = true;
        error.value = null;
        try {
            const res = await preinscService.agregarEstudios(dni, body);
            success.value = res.message || 'Estudios agregados'
            return res
        } catch (err: any) {
            error.value = err?.message || 'Error al agregar estudios'
            throw err;
        } finally {
            loading.value = false
        }
    }

    const agregarArchivos = async (dni: string, formData: FormData) =>{
        loading.value = true;
        error.value = null;


        try {
            const res = await preinscService.agregarArchivos(dni, formData);
            success.value = res.message || 'Archivos subidos correctamente'
            return res
        }catch(err: any){
            error.value = err?.message || 'Error al subir los archivos'
            throw err;
        }finally{
            loading.value =false
        }
    }

    return { loading, error, success, registrar, agregarEstudios, agregarArchivos }
}