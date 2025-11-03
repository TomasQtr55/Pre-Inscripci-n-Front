<template>
  <div class="space-y-6">
    <h2 class="text-2xl font-bold text-blue-800">Datos Personales</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Nombre Completo *
        </label>
        <input
          v-model="localData.nombreCompleto"
          type="text"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          DNI *
        </label>
        <input
          v-model="localData.dni"
          type="text"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          CUIT
        </label>
        <input
          v-model="localData.cuit"
          type="text"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Email *
        </label>
        <input
          v-model="localData.email"
          type="email"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Provincia *
        </label>
        <input
          v-model="localData.provincia"
          type="text"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Ciudad *
        </label>
        <input
          v-model="localData.ciudad"
          type="text"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { DatosPersonales } from '@/models/form';

interface Props {
  formData: DatosPersonales;
}

interface Emits {
  (e: 'update', data: DatosPersonales): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const localData = ref<DatosPersonales>({ ...props.formData });

watch(localData, (newValue: DatosPersonales) => {
  emit('update', newValue);
}, { deep: true });
</script>