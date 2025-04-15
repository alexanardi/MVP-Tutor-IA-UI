<script setup lang="ts">
import { ref } from 'vue'
import { Mail, Lock } from 'lucide-vue-next'
import logo from '@/assets/robot.png'
import { ArrowLeft } from 'lucide-vue-next'


const email = ref('')
const password = ref('')

const handleLogin = () => {
  console.log('Login con:', email.value, password.value)
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center px-4 py-12">
    <!-- Logo y nombre fuera del formulario -->
    <div class="flex flex-col items-center mb-10">
      <img :src="logo" alt="Logo" class="w-20 h-20 mb-2 animate-float-slow" />
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Tutor IA</h1>
    </div>

    <!-- Formulario login -->
    <div class="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
      <h2 class="text-xl font-bold text-center text-gray-900 dark:text-white mb-6">
        Iniciar sesión
      </h2>

      <form @submit.prevent="handleLogin" class="space-y-5">
        <!-- Email -->
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Correo electrónico
          </label>
          <div class="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-lg px-3 py-2">
            <Mail class="w-5 h-5 text-gray-500 dark:text-gray-300" />
            <input
              v-model="email"
              type="email"
              placeholder="tucorreo@colegio.cl"
              class="w-full bg-transparent outline-none text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              required
            />
          </div>
        </div>

        <!-- Password -->
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Contraseña
          </label>
          <div class="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-lg px-3 py-2">
            <Lock class="w-5 h-5 text-gray-500 dark:text-gray-300" />
            <input
              v-model="password"
              type="password"
              placeholder="••••••••"
              class="w-full bg-transparent outline-none text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              required
            />
          </div>
        </div>

        <!-- Botón -->
        <button
          type="submit"
          class="w-full py-2 rounded-lg bg-[#36BCFF] text-white font-semibold hover:bg-[#2ea7e3] transition-colors"
        >
          Iniciar sesión
        </button>
      </form>
    </div>
    <router-link
  to="/"
  class="flex justify-center items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-6 hover:text-[#36BCFF] transition-colors"
>
  <ArrowLeft class="w-4 h-4" />
  Volver al inicio
</router-link>
  </div>
</template>

<style scoped>
@keyframes floatSlow {
  0% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0); }
}

.animate-float-slow {
  animation: floatSlow 3s ease-in-out infinite;
}
</style>
