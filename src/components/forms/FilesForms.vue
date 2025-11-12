<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { usePreinscripcion } from '@/composables/usePreinscripcion'

// Router
const router = useRouter()

// Composable
const { loading, error, success, agregarArchivos } = usePreinscripcion()

// Archivos
const dniFrente = ref<File | null>(null)
const dniDorso = ref<File | null>(null)
const tituloSec = ref<File | null>(null)
const certificadoMed = ref<File | null>(null)

// DNI almacenado localmente
const dni = localStorage.getItem('dni')

// Enviar formulario
const enviarFormulario = async (e: Event) => {
  e.preventDefault()

  if (!dniFrente.value || !dniDorso.value || !certificadoMed.value) {
    alert('Por favor, completá todos los campos obligatorios (*)')
    return
  }

  if (!dni) {
    alert('No se encontró el DNI del usuario. Volvé a completar el formulario anterior.')
    return
  }

  try {
    const formData = new FormData()
    formData.append('dniFrente', dniFrente.value)
    formData.append('dniDorso', dniDorso.value)
    if (tituloSec.value) formData.append('tituloSecundario', tituloSec.value)
    formData.append('certificadoBuenaSalud', certificadoMed.value)

    await agregarArchivos(dni, formData)

    
    router.push('/Formulario-Terminado')
  } catch (err) {
    console.error('Error al subir archivos:', err)
    
  }
}
</script>

<template>
  <div class="space-y-6">
    <h2 class="text-2xl font-bold text-blue-800">Documentación Requerida</h2>

    <form class="space-y-6" @submit.prevent="enviarFormulario">
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
        <div v-if="tituloSec" class="mt-2 text-sm text-green-600 flex items-center">
          <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          Archivo cargado correctamente
        </div>
      </div>

      <!-- Certificado Médico -->
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
        <div v-if="certificadoMed" class="mt-2 text-sm text-green-600 flex items-center">
          <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          Archivo cargado correctamente
        </div>
      </div>

      <!-- Botón Enviar -->
      <div class="md:col-start-2 md:justify-self-end">
        <button
          type="submit"
          :disabled="loading"
          class="bg-orange-500 text-white p-4 rounded-xl w-full md:w-auto hover:bg-orange-600 transition-colors disabled:opacity-50"
        >
          {{ loading ? 'Enviando...' : 'Enviar' }}
        </button>
      </div>

      <!-- Mensajes -->
      <p v-if="error" class="text-red-600 text-sm mt-2">{{ error }}</p>
      <p v-if="success" class="text-green-600 text-sm mt-2">{{ success }}</p>
    </form>
  </div>
</template>
