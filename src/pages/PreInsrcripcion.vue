<script setup lang="ts">
import PersonalDataForm from '@/components/forms/PersonalDataForm.vue';
import StudiesForm from '@/components/forms/StudiesForm.vue';
import FilesForms from '@/components/forms/FilesForms.vue';
import { ref } from 'vue';
// control del paso actual
const currentStep = ref(1)

// función para avanzar al siguiente formulario
const goToNextStep = () => {
  currentStep.value++
}
</script>
<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-8">
    <div class="container mx-auto px-4 max-w-4xl">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-blue-800 mb-2">
          Pre-Inscripción ITS
        </h1>
        <p class="text-lg text-gray-600">
          Completa los siguientes módulos para tu pre-inscripción
        </p>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-6 mb-6">
          <PersonalDataForm v-if="currentStep === 1" @next="goToNextStep"/> 
          <StudiesForm v-if="currentStep === 2" @next="goToNextStep"/>
          <FilesForms v-if="currentStep === 3" />
      </div>
      
     <!--  <StudiesForm/>
      <FilesForms/> -->
    </div>
  </div>


  <!-- Navigation Buttons -->
     
    
  
</template>

