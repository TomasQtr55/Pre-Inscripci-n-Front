<template>
  <div class="space-y-6">
    <h2 class="text-2xl font-bold text-blue-800">Situación Laboral</h2>
    
    <div class="space-y-6">
      <!-- Trabaja Actualmente -->
      <div class="bg-gray-50 p-4 rounded-lg">
        <label class="flex items-center space-x-3">
          <input
            v-model="localData.trabaja"
            type="checkbox"
            class="rounded border-gray-300 text-orange-500 focus:ring-orange-500 h-5 w-5"
          />
          <span class="text-lg font-medium text-gray-900">¿Trabaja actualmente?</span>
        </label>
      </div>

      <!-- Lugar de Trabajo -->
      <div v-if="localData.trabaja" class="space-y-4 transition-all duration-300">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Lugar de Trabajo *
          </label>
          <input
            v-model="localData.lugar"
            type="text"
            placeholder="Nombre de la empresa o lugar donde trabaja"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            :required="localData.trabaja"
          />
        </div>

        <div class="bg-blue-50 p-4 rounded-lg">
          <p class="text-sm text-blue-700">
            💼 Si trabajas, ten en cuenta que el ITS ofrece horarios flexibles para que puedas compatibilizar trabajo y estudio.
          </p>
        </div>
      </div>

      <div v-else class="bg-orange-50 p-4 rounded-lg">
        <p class="text-sm text-orange-700">
          🎓 Esta información nos ayuda a orientarte mejor sobre oportunidades laborales durante tu formación.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { SituacionLaboral } from '@/models/form';

interface Props {
  formData: SituacionLaboral;
}

interface Emits {
  (e: 'update', data: SituacionLaboral): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const localData = ref<SituacionLaboral>({ ...props.formData });

watch(localData, (newValue: SituacionLaboral) => {
  emit('update', newValue);
}, { deep: true });
</script>