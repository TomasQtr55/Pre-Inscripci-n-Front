<template>
  <div class="space-y-6">
    <h2 class="text-2xl font-bold text-blue-800">Recursos Tecnológicos</h2>
    
    <div class="space-y-6">
      <!-- Computadora -->
      <div class="bg-gray-50 p-4 rounded-lg">
        <label class="flex items-center space-x-3">
          <input
            v-model="localData.tieneComputadora"
            type="checkbox"
            class="rounded border-gray-300 text-orange-500 focus:ring-orange-500 h-5 w-5"
          />
          <span class="text-lg font-medium text-gray-900">¿Tiene computadora para usar?</span>
        </label>
        
        <p class="text-sm text-gray-600 mt-2 ml-8">
          💻 La computadora es fundamental para el desarrollo de las actividades académicas.
        </p>
      </div>

      <!-- Tipo de Conexión -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-4">
          Tipo de Conexión a Internet *
        </label>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label class="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              v-model="localData.tipoConexion"
              type="radio"
              value="wifi-hogar"
              class="text-orange-500 focus:ring-orange-500"
            />
            <span class="text-gray-700">WiFi de hogar</span>
          </label>

          <label class="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              v-model="localData.tipoConexion"
              type="radio"
              value="datos-moviles"
              class="text-orange-500 focus:ring-orange-500"
            />
            <span class="text-gray-700">Datos móviles</span>
          </label>

          <label class="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              v-model="localData.tipoConexion"
              type="radio"
              value="publica"
              class="text-orange-500 focus:ring-orange-500"
            />
            <span class="text-gray-700">Conexión pública</span>
          </label>

          <label class="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              v-model="localData.tipoConexion"
              type="radio"
              value="institucion"
              class="text-orange-500 focus:ring-orange-500"
            />
            <span class="text-gray-700">En la institución</span>
          </label>
        </div>
      </div>

      <!-- Información Adicional -->
      <div class="bg-blue-50 p-4 rounded-lg">
        <h3 class="font-medium text-blue-800 mb-2">Importante</h3>
        <p class="text-sm text-blue-700">
          🚀 El ITS cuenta con laboratorios equipados para que puedas desarrollar tus prácticas.
          Si necesitas apoyo con recursos tecnológicos, contáctanos.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { Tecnologia } from '@/models/form';

interface Props {
  formData: Tecnologia;
}

interface Emits {
  (e: 'update', data: Tecnologia): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const localData = ref<Tecnologia>({ ...props.formData });

watch(localData, (newValue: Tecnologia) => {
  emit('update', newValue);
}, { deep: true });
</script>