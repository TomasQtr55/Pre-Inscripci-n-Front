<template>
  <div class="space-y-6">
    <h2 class="text-2xl font-bold text-blue-800">Domicilio</h2>
    
    <div class="space-y-6">
      <!-- Dirección -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Dirección Completa *
        </label>
        <input
          v-model="localData.direccion"
          type="text"
          placeholder="Calle, número, piso, departamento"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>

      <!-- Personas con quien convive -->
      <div>
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-medium text-gray-900">Personas con quien convive</h3>
          <button
            type="button"
            @click="addConvivencia"
            class="px-3 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600"
          >
            Agregar Persona
          </button>
        </div>

        <div v-for="(persona, index) in localData.convivencia" :key="index" class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 p-4 border border-gray-200 rounded-lg">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Nombre Completo
            </label>
            <input
              v-model="persona.nombre"
              type="text"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Parentesco
            </label>
            <select
              v-model="persona.parentesco"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Seleccionar parentesco</option>
              <option value="padre">Padre</option>
              <option value="madre">Madre</option>
              <option value="hermano">Hermano/a</option>
              <option value="conyuge">Cónyuge</option>
              <option value="hijo">Hijo/a</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div class="md:col-span-2 flex justify-end">
            <button
              type="button"
              @click="removeConvivencia(index)"
              class="px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600"
            >
              Eliminar
            </button>
          </div>
        </div>

        <div v-if="localData.convivencia.length === 0" class="text-center text-gray-500 py-4 border border-dashed border-gray-300 rounded-lg">
          No se han agregado personas con quien convive
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { Domicilio, Convivencia } from '@/models/form';

interface Props {
  formData: Domicilio;
}

interface Emits {
  (e: 'update', data: Domicilio): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const localData = ref<Domicilio>({ 
  ...props.formData,
  convivencia: [...props.formData.convivencia]
});

const addConvivencia = (): void => {
  localData.value.convivencia.push({
    nombre: '',
    parentesco: ''
  });
};

const removeConvivencia = (index: number): void => {
  localData.value.convivencia.splice(index, 1);
};

watch(localData, (newValue: Domicilio) => {
  emit('update', newValue);
}, { deep: true });
</script>