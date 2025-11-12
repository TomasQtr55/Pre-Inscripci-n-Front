
<script setup lang="ts">
  import { defineEmits, reactive } from 'vue'
  import type { EstudiosSecundariosBody } from '@/models/preinscripcion'
  import { usePreinscripcion } from '@/composables/usePreinscripcion'

  const {loading, error, success, agregarEstudios} = usePreinscripcion();

  const dni = localStorage.getItem('dni')

  const emit = defineEmits(['next'])



  const form = reactive<EstudiosSecundariosBody>({
    secundarioCompleto: false,
    institucion: '',
    anioEgreso: 0,
    ciudadInstitucion: '',
    provinciaInstitucion: ''
    
  })

  const onSubmit = async () => {
    if (!dni){
      alert('no se encontro el dni, complete los datos personales')
      return
    }

    try{
      await agregarEstudios(dni, JSON.parse(JSON.stringify(form)));
      emit('next')
    } catch(err){
      console.error(err)
    }
  }

  

  const handleSubmit = (e: Event) => {
    e.preventDefault()
    // Aquí podrías validar los campos antes de avanzar
    emit('next') // Avanzar al siguiente formulario
  }
</script>

<template>
  <div class="space-y-6">
    <h2 class="text-2xl font-bold text-blue-800">Estudios Secundarios</h2>

    <form class="space-y-4" @submit.prevent="onSubmit">
      <!-- Secundario Completo -->
      <div class="flex items-center space-x-4">
        <label class="flex items-center space-x-2">
          <input
            v-model="form.secundarioCompleto"
            type="checkbox"
            class="rounded border-gray-500 text-orange-500 focus:ring-orange-500"
          />
          <span class="text-sm font-medium text-gray-700">¿Secundario completo?</span>
        </label>
      </div>

      <!-- Institución -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Institución Educativa *</label>
        <input
          v-model="form.institucion"
          type="text"
          placeholder="Ej: Centro de Educación Técnica N°30"
          class="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>

      <!-- Año de Egreso -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Año de Egreso</label>
        <input
          v-model.number="form.anioEgreso"
          type="number"
          min="1950"
          max="2025"
          class="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <!-- Provincia y Ciudad -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Provincia de la Institución</label>
          <input
            v-model="form.provinciaInstitucion"
            type="text"
            placeholder="Ej: Río Negro"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Ciudad de la Institución</label>
          <input
            v-model="form.ciudadInstitucion"
            type="text"
            placeholder="Ej: Cipolletti"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>

     

      <!-- Botón -->
      <div class="md:col-start-2 md:justify-self-end">
        <button
          type="submit"
          :disabled="loading"
          class="bg-orange-500 text-white p-4 rounded-xl w-full md:w-auto hover:bg-orange-600 transition-colors"
        >
          <span v-if="loading">Enviando...</span>
          <span v-else>Enviar</span>
        </button>
        <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
        <p v-if="success" class="text-green-600 mt-2">{{ success }}</p>
      </div>
    </form>
  </div>
</template>
