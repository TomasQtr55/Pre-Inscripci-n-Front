<template>
  <div class="w-full bg-gray-200 rounded-full h-4 mb-8">
    <div 
      class="bg-blue-600 h-4 rounded-full transition-all duration-500"
      :style="{ width: `${progress}%` }"
    ></div>
  </div>
  <div class="text-center text-gray-600 mb-8">
    Paso {{ currentStep }} de {{ totalSteps }} - {{ progress }}% completado
  </div>
</template>

<script setup lang="ts">
interface Props {
  progress: number;
  currentStep: number;
  totalSteps: number;
}

defineProps<Props>();
</script>