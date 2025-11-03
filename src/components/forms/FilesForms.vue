<template>
  <div class="space-y-6">
    <h2 class="text-2xl font-bold text-blue-800">Documentación Requerida</h2>
    
    <div class="space-y-6">
      <!-- DNI Frente -->
      <div class="border border-gray-200 rounded-lg p-4">
        <label class="block text-sm font-medium text-gray-700 mb-2">
          DNI - Frente *
        </label>
        <input
          type="file"
          @change="handleFileUpload('dniFrente', $event)"
          accept=".pdf,.jpg,.jpeg,.png"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
        <p class="text-xs text-gray-500 mt-1">Foto o scan del frente de tu DNI</p>
        <div v-if="localData.dniFrente" class="mt-2 text-sm text-green-600 flex items-center">
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
          @change="handleFileUpload('dniDorso', $event)"
          accept=".pdf,.jpg,.jpeg,.png"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
        <p class="text-xs text-gray-500 mt-1">Foto o scan del dorso de tu DNI</p>
        <div v-if="localData.dniDorso" class="mt-2 text-sm text-green-600 flex items-center">
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
          @change="handleFileUpload('tituloSecundario', $event)"
          accept=".pdf,.jpg,.jpeg,.png"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <p class="text-xs text-gray-500 mt-1">Título secundario o constancia de título en trámite</p>
        <div v-if="localData.tituloSecundario" class="mt-2 text-sm text-green-600 flex items-center">
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { Archivos } from '@/models/form';

interface Props {
  formData: Archivos;
}

interface Emits {
  (e: 'update', data: Archivos): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const localData = ref<Archivos>({ ...props.formData });

const handleFileUpload = (field: keyof Archivos, event: Event): void => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  
  if (file) {
   
    if (file.size > 10 * 1024 * 1024) {
      alert('El archivo es demasiado grande. Máximo 5MB permitido.');
      target.value = '';
      return;
    }

    // Validar tipo de archivo
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
    if (!allowedTypes.includes(file.type)) {
      alert('Formato de archivo no permitido. Use JPG, PNG o PDF.');
      target.value = '';
      return;
    }

    // Simular upload - en producción aquí harías la subida real al servidor
    localData.value[field] = URL.createObjectURL(file);
  }
};

watch(localData, (newValue: Archivos) => {
  emit('update', newValue);
}, { deep: true });
</script>