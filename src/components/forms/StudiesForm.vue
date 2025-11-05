
<script setup lang="ts">

</script>

<template>
  <div class="space-y-6">
    <h2 class="text-2xl font-bold text-blue-800">Estudios Secundarios</h2>
    
    <div class="space-y-4">
      <!-- Secundario Completo -->
      <div class="flex items-center space-x-4">
        <label class="flex items-center space-x-2">
          <input
            
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
          
          type="number"
          min="1950"
      
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
            
            type="text"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Ciudad de la Institución
          </label>
          <input
            
            type="text"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>

      <!-- Adeuda Materias -->
      <div class="flex items-center space-x-4">
        <label class="flex items-center space-x-2">
          <input
            
            type="checkbox"
            class="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
          />
          <span class="text-sm font-medium text-gray-700">¿Adeuda materias?</span>
        </label>
      </div>

  
    </div>
  </div>
</template>
