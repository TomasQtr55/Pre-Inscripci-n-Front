<script setup lang="ts">
  import { defineEmits, reactive } from 'vue'
  import { usePreinscripcion } from '@/composables/usePreinscripcion'
  import type { PreinscripcionCrearBody } from '@/models/preinscripcion'

  const emit = defineEmits(['next'])

  const { loading, error, success, registrar } = usePreinscripcion();

  const form = reactive<PreinscripcionCrearBody>({
    carrera: '',
    datosPersonales: {
      nombreCompleto: '',
      apellidoCompleto: '',
      dni: '',
      cuit: '',
      email: '',
      numeroTelefono: '',
      provincia: '',
      ciudad: '',
      direccion: '',
      fechaNacimiento: ''
    }
  })

  
  const onSubmit = async () => {
    try {
      await registrar(JSON.parse(JSON.stringify(form)));
      localStorage.setItem('dni', form.datosPersonales.dni);
      emit('next')
    }catch(err){
      console.error(err)
    }
  }


</script>

<template>
  <div class="space-y-6">
    <h2 class="text-2xl font-bold text-blue-800">Datos Personales</h2>
    
    <form class="grid grid-cols-1 md:grid-cols-2 gap-4"
          @submit.prevent="onSubmit">
      
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Agregar carrera *
        </label>
        <input
          v-model="form.carrera"
          type="text"
          placeholder="DevOps"
          class="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>
      
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Nombre Completo *
        </label>
        <input
          v-model="form.datosPersonales.nombreCompleto"
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
          v-model="form.datosPersonales.apellidoCompleto"
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
          v-model="form.datosPersonales.dni"
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
          v-model="form.datosPersonales.cuit"
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
          v-model="form.datosPersonales.numeroTelefono"
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
          v-model="form.datosPersonales.email"
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
          v-model="form.datosPersonales.provincia"
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
          v-model="form.datosPersonales.ciudad"
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
          v-model="form.datosPersonales.direccion"
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
          v-model="form.datosPersonales.fechaNacimiento"
          type="date"
          class="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>

      <div class="md:col-start-2 md:justify-self-end">
        <button type="submit" class="bg-orange-500 text-white p-4 rounded-xl w-full md:w-auto hover:bg-orange-600 transition-colors">
          enviar
        </button>
        <div class="mt-4 flex items-center gap-2">
          <p v-if="error" class="text-red-500">{{ error }}</p>
          <p v-if="success" class="text-green-600">{{ success }}</p>
        </div>
      </div>
    </form>
  </div> 
  
</template>

