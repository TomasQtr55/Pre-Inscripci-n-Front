<template>
  <div class="space-y-6">
    <h2 class="text-2xl font-bold text-blue-800">Contacto de Emergencia</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Nombre *
        </label>
        <input
          v-model="localData.nombre"
          type="text"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Apellido *
        </label>
        <input
          v-model="localData.apellido"
          type="text"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Teléfono *
        </label>
        <input
          v-model="localData.telefono"
          type="tel"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Parentesco *
        </label>
        <select
          v-model="localData.parentesco"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        >
          <option value="">Seleccionar parentesco</option>
          <option value="padre">Padre</option>
          <option value="madre">Madre</option>
          <option value="hermano">Hermano/a</option>
          <option value="conyuge">Cónyuge</option>
          <option value="hijo">Hijo/a</option>
          <option value="tio">Tío/a</option>
          <option value="abuelo">Abuelo/a</option>
          <option value="amigo">Amigo/a</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <div class="md:col-span-2">
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          v-model="localData.email"
          type="email"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { ContactoEmergencia } from '@/models/form';

interface Props {
  formData: ContactoEmergencia;
}

interface Emits {
  (e: 'update', data: ContactoEmergencia): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const localData = ref<ContactoEmergencia>({ ...props.formData });

watch(localData, (newValue: ContactoEmergencia) => {
  emit('update', newValue);
}, { deep: true });
</script>