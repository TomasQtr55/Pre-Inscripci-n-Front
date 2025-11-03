<template>
  <div class="space-y-6">
    <h2 class="text-2xl font-bold text-blue-800">Estudios Secundarios</h2>
    
    <div class="space-y-4">
      <!-- Secundario Completo -->
      <div class="flex items-center space-x-4">
        <label class="flex items-center space-x-2">
          <input
            v-model="localData.secundarioCompleto"
            type="checkbox"
            class="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
          />
          <span class="text-sm font-medium text-gray-700">¿Secundario completo?</span>
        </label>
      </div>

      <!-- Institución -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Institución Educativa *
        </label>
        <input
          v-model="localData.institucion"
          type="text"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>

      <!-- Año de Egreso -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Año de Egreso
        </label>
        <input
          v-model="localData.anioEgreso"
          type="number"
          min="1950"
          :max="new Date().getFullYear()"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <!-- Provincia y Ciudad de Institución -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Provincia de la Institución
          </label>
          <input
            v-model="localData.provinciaInstitucion"
            type="text"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Ciudad de la Institución
          </label>
          <input
            v-model="localData.ciudadInstitucion"
            type="text"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>

      <!-- Adeuda Materias -->
      <div class="flex items-center space-x-4">
        <label class="flex items-center space-x-2">
          <input
            v-model="localData.adeudaMaterias"
            type="checkbox"
            class="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
          />
          <span class="text-sm font-medium text-gray-700">¿Adeuda materias?</span>
        </label>
      </div>

      <!-- Archivo Título -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Título Secundario (Archivo)
        </label>
        <input
          type="file"
          @change="handleTituloUpload"
          accept=".pdf,.jpg,.jpeg,.png"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <p class="text-xs text-gray-500 mt-1">Formatos aceptados: PDF, JPG, PNG</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { Estudios } from '@/models/form';

interface Props {
  formData: Estudios;
}

interface Emits {
  (e: 'update', data: Estudios): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const localData = ref<Estudios>({ ...props.formData });

const handleTituloUpload = (event: Event): void => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) {
    // Simular upload - en producción aquí harías la subida real
    localData.value.tituloArchivoUrl = URL.createObjectURL(file);
  }
};

watch(localData, (newValue: Estudios) => {
  emit('update', newValue);
}, { deep: true });
</script>