<script setup lang="ts">
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Sidebar from '@/components/Sidebar.vue'
import { ArrowLeft } from 'lucide-vue-next'



const nombre = ref('')
const email = ref('')
const comentario = ref('')

const enviarFormulario = () => {
  if (!nombre.value || !email.value || !comentario.value) {
    alert('Por favor, completa todos los campos.')
    return
  }

  // Aquí iría la lógica real (API, envío, etc.)
  console.log('Enviando:', {
    nombre: nombre.value,
    email: email.value,
    comentario: comentario.value,
  })

  alert('¡Gracias por tu mensaje!')

  nombre.value = ''
  email.value = ''
  comentario.value = ''
}
</script>

<template>
  <div class="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">
    <Sidebar />
    <Navbar />

    <section class="max-w-2xl mx-auto py-20 px-4 pt-24">
        <div class="text-center mb-10">
  <h1 class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-[#36BCFF] mb-4">
    Contáctanos
  </h1>
  <p class="text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-base">
    Déjanos tus datos y nos pondremos en contacto contigo para agendar una reunión, ya sea presencial o virtual,
    según tu preferencia. Estamos aquí para ayudarte.
  </p>
</div>


      <form @submit.prevent="enviarFormulario" class="space-y-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
        <!-- Nombre -->
        <div>
          <label class="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Nombre</label>
          <input
            v-model="nombre"
            type="text"
            required
            class="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg outline-none placeholder-gray-400 dark:placeholder-gray-500"
            placeholder="Tu nombre completo"
          />
        </div>

        <!-- Email -->
        <div>
          <label class="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Correo electrónico</label>
          <input
            v-model="email"
            type="email"
            required
            class="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg outline-none placeholder-gray-400 dark:placeholder-gray-500"
            placeholder="tucorreo@colegio.cl"
          />
        </div>

        <!-- Comentario -->
        <div>
          <label class="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Comentario</label>
          <textarea
            v-model="comentario"
            rows="4"
            required
            class="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg outline-none placeholder-gray-400 dark:placeholder-gray-500 resize-none"
            placeholder="Escribe tu mensaje..."
          ></textarea>
        </div>

        <!-- Botón enviar -->
        <button
          type="submit"
          class="w-full py-2 rounded-lg bg-[#36BCFF] text-white font-semibold hover:bg-[#2ea7e3] transition-colors"
        >
          Enviar
        </button>
      </form>
      <router-link to="/" class="flex justify-center items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-6 hover:text-[#36BCFF] transition-colors">
        <ArrowLeft class="w-4 h-4" /> Volver al inicio
        </router-link>
    </section>

    <Footer />
  </div>
</template>
