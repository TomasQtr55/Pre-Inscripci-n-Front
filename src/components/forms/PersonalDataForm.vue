<script setup lang="ts">
  import { defineEmits } from 'vue'

  const emit = defineEmits(['next'])

  const handleSubmit = (e: Event) => {
    e.preventDefault()
    // Aquí podrías validar los campos antes de avanzar
    emit('next') // Avanzar al siguiente formulario
  }

</script>

<template>
  <div class="space-y-6">
    <h2 class="text-2xl font-bold text-blue-800">Datos Personales</h2>
    
    <form class="grid grid-cols-1 md:grid-cols-2 gap-4"
          @submit.prevent="handleSubmit">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Nombre Completo *
        </label>
        <input
          type="text"
          placeholder="Ej: Jose Luis"
          class="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Apellido completo *
        </label>
        <input
          type="text"
          placeholder="Ej: Hernan"
          class="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          DNI *
        </label>
        <input
          type="text"
          placeholder="Ej: 42389234 ( DNI sin puntos )"
          class="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          CUIT
        </label>
        <input
          type="text"
          placeholder="Ej: 20423892343 ( CUIT sin puntos ni guiones )"
          class="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Telefono *
        </label>
        <input
          type="text"
          placeholder="Ej: 2894580819"
          class="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Email *
        </label>
        <input
          type="email"
          placeholder="ejemplo@gmail.com"
          class="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Provincia *
        </label>
        <input
          type="text"
          placeholder="Ej: Rio Negro"
          class="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Ciudad *
        </label>
        <input
          type="text"
          placeholder="Ej: Cipolletti"
          class="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
         Direccion *
        </label>
        <input
          type="text"
          placeholder="Ej: Emeralda 2092"
          class="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Fecha Nacimiento *
        </label>
        <input
          type="date"
          class="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>

      <div class="md:col-start-2 md:justify-self-end">
        <button type="submit" class="bg-orange-500 text-white p-4 rounded-xl w-full md:w-auto hover:bg-orange-600 transition-colors">
          enviar
        </button>
      </div>
    </form>
  </div>
</template>

