
<script setup lang="ts">
 import { ref } from 'vue';
import { useRouter } from 'vue-router';

 const dniFrente = ref < File | null>(null)
 const dniDorso = ref < File | null>(null)
 const tituloSec = ref < File | null>(null)
 const certificadoMed = ref < File | null>(null)
 
 const router = useRouter()
  const enviarFormulario = () => {
  if (dniFrente.value && dniDorso.value && certificadoMed.value) {
    router.push('/Formulario-Terminado')
  } else {
    console.log("no esta comlpleto el formulario");
    
  }
}


</script>

<template>
  <div class="space-y-6">
    <h2 class="text-2xl font-bold text-blue-800">Documentación Requerida</h2>
    
    <form class="space-y-6">
      <!-- DNI Frente -->
      <div class="border border-gray-200 rounded-lg p-4">
        <label class="block text-sm font-medium text-gray-700 mb-2">
          DNI - Frente *
        </label>
        <input
          type="file"
         @change="(e) => dniFrente = (e.target as HTMLInputElement).files?.[0] || null"
          accept=".pdf,.jpg,.jpeg,.png"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
        <p class="text-xs text-gray-500 mt-1">Foto o scan del frente de tu DNI</p>
        <div v-if="dniFrente" class="mt-2 text-sm text-green-600 flex items-center">
          <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          Archivo cargado correctamente
        </div>
      </div>

      <!-- DNI Dorso -->
      <div class="border border-gray-200 rounded-lg p-4">
        <label class="block text-sm font-medium text-gray-700 mb-2">
          DNI - Dorso *
        </label>
        <input
          type="file"
         @change="(e) => dniDorso = (e.target as HTMLInputElement).files?.[0] || null"
          accept=".pdf,.jpg,.jpeg,.png"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
        <p class="text-xs text-gray-500 mt-1">Foto o scan del dorso de tu DNI</p>
        <div v-if="dniDorso" class="mt-2 text-sm text-green-600 flex items-center">
          <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          Archivo cargado correctamente
        </div>
      </div>

      <!-- Título Secundario -->
      <div class="border border-gray-200 rounded-lg p-4">
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Título Secundario o Constancia
        </label>
        <input
          type="file"
         @change="(e) => tituloSec = (e.target as HTMLInputElement).files?.[0] || null"
          accept=".pdf,.jpg,.jpeg,.png"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <p class="text-xs text-gray-500 mt-1">Título secundario o constancia de título en trámite</p>
        <div v-if="tituloSec" class="mt-2 text-sm text-green-600 flex items-center">
          <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          Archivo cargado correctamente
        </div>
      </div>

      <div class="border border-gray-200 rounded-lg p-4">
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Certificado de Salud *
        </label>
        <input
          type="file"
         @change="(e) => certificadoMed = (e.target as HTMLInputElement).files?.[0] || null"
          accept=".pdf,.jpg,.jpeg,.png"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
        <p class="text-xs text-gray-500 mt-1">Foto o scan del certificado</p>
        <div v-if="certificadoMed" class="mt-2 text-sm text-green-600 flex items-center">
          <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          Archivo cargado correctamente
        </div>
      </div>

      <!-- Requisitos de Archivos -->
      <div class="bg-orange-50 p-4 rounded-lg">
        <h3 class="font-medium text-orange-800 mb-2">Requisitos de los archivos:</h3>
        <ul class="text-sm text-orange-700 space-y-1">
          <li>• Formatos aceptados: PDF, JPG, PNG</li>
          <li>• Tamaño máximo por archivo: 5MB</li>
          <li>• Las imágenes deben ser legibles y nítidas</li>
          <li>• Los documentos deben estar actualizados</li>
        </ul>
      </div>
      
       <div type="submit" class="md:col-start-2 md:justify-self-end">
        
        <button type="submit" @click="enviarFormulario" class="bg-orange-500 text-white p-4 rounded-xl w-full md:w-auto hover:bg-orange-600 transition-colors">
          enviar
        </button>
        
       </div>
    </form>
  </div>
</template>

