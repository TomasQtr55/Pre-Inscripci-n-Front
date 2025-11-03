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

      <!-- Progress Bar -->
      <ProgressBar
        :progress="formStore.formData.progreso"
        :current-step="formStore.currentStep"
        :total-steps="formStore.totalSteps"
      />

      <!-- Form Container -->
      <div class="bg-white rounded-lg shadow-lg p-6 mb-6">
        <component
          :is="currentComponent"
          :form-data="getCurrentSectionData"
          @update="updateFormData"
        />
      </div>

      <!-- Navigation Buttons -->
      <div class="flex justify-between">
        <button
          @click="prevStep"
          :disabled="formStore.currentStep === 1"
          class="px-6 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Anterior
        </button>

        <button
          v-if="formStore.currentStep < formStore.totalSteps"
          @click="nextStep"
          class="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
        >
          Siguiente
        </button>

        <button
          v-else
          @click="submitForm"
          class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Enviar Pre-Inscripción
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type {Component}  from 'vue';
import { useFormStore } from '@/stores/form';
import type { FormSection, FormData } from '@/models/form';

import ProgressBar from '@/components/forms/ProgressBar.vue';
import PersonalDataForm from '@/components/forms/PersonalDataForm.vue';
import StudiesForm from '@/components/forms/StudiesForm.vue';
import AdressForm from '@/components/forms/AdressForm.vue'; 
import EmergencyContactForm from '@/components/forms/EmergencyContactForm.vue';
import TechnologyForm from '@/components/forms/TechnologyForm.vue';
import WorkSituationForm from '@/components/forms/WorkSituationForm.vue';
import FilesForms from '@/components/forms/FilesForms.vue';

const formStore = useFormStore();

const components: Record<number, Component> = {
  1: PersonalDataForm,
  2: StudiesForm,
  3: AdressForm,
  4: EmergencyContactForm,
  5: TechnologyForm,
  6: WorkSituationForm,
  7: FilesForms
};

const sectionNames: Record<number, FormSection> = {
  1: 'datosPersonales',
  2: 'estudios',
  3: 'domicilio',
  4: 'contactoEmergencia',
  5: 'situacionLaboral',
  6: 'cobertura',
  7: 'tecnologia',
  8: 'transporte',
  9: 'redes'
};

const currentComponent = computed(() => components[formStore.currentStep]);

const getCurrentSectionData = computed(() => {
  const section = sectionNames[formStore.currentStep];
  return formStore.formData[section];
});

const updateFormData = (data: any): void => {
  const section = sectionNames[formStore.currentStep];
  formStore.updateFormData(section, data);
};

const nextStep = (): void => {
  formStore.nextStep();
};

const prevStep = (): void => {
  formStore.prevStep();
};

const submitForm = (): void => {
  console.log('Formulario enviado:', formStore.formData);
  alert('¡Pre-inscripción enviada con éxito!');
};
</script>