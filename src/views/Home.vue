<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
import Footer from '../components/Footer.vue'
import robot from '../assets/robot.png'
 
const features = [
  { title: 'Vue Router', description: 'Navegación fluida entre páginas con el enrutador oficial de Vue.js' },
  { title: 'Pinia', description: 'Gestión de estado predecible y eficiente con persistencia integrada' },
  { title: 'Axios', description: 'Cliente HTTP robusto para comunicación con APIs' },
  { title: 'Lucide Icons', description: 'Biblioteca de iconos hermosos y personalizables' },
]

const technologies = [
  { name: 'Vue.js', level: '95%' },
  { name: 'TypeScript', level: '90%' },
  { name: 'Tailwind CSS', level: '85%' },
  { name: 'Pinia', level: '80%' },
  { name: 'Vue Router', level: '88%' },
]
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <Sidebar />
    <Navbar />

    <!-- Main Content -->
    <main class="w-full">
      <!-- Hero Section -->
      <section class="px-4 py-12 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900">
    <div class="text-center mb-12">
      <img
        :src="robot"
        alt="Robot Logo"
        class="mx-auto w-24 h-24 mb-6 animate-float-slow"
      />
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-[#36BCFF] leading-snug sm:leading-tight md:leading-tight tracking-tight mb-6"
      >
        Acompañamiento personalizado<br />
        e integral del progreso educativo
      </h1>

      <p class="text-lg text-gray-600 dark:text-gray-300 mb-10">
        Datos, análisis y estrategias. Todo en un solo lugar.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Desarrollo Rápido
        </h2>
        <p class="text-gray-600 dark:text-gray-300">
          Vue + Vite proporcionan una experiencia de desarrollo ultrarrápida
        </p>
      </div>

      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          TypeScript
        </h2>
        <p class="text-gray-600 dark:text-gray-300">
          Desarrollo seguro y productivo con soporte completo de TypeScript
        </p>
      </div>

      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Tailwind CSS
        </h2>
        <p class="text-gray-600 dark:text-gray-300">
          Diseño moderno y responsive con utilidades de primera clase
        </p>
      </div>
    </div>
  </section>

      <!-- Features Section -->
      <section class="px-4 py-16 bg-white dark:bg-gray-800">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Características Adicionales
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="feature in features" :key="feature.title" 
                 class="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {{ feature.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  </div>
</template>

<style scoped>
@keyframes floatSlow {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-8px); }
  100% { transform: translateY(0); }
}

.animate-float-slow {
  animation: floatSlow 3s ease-in-out infinite;
}
</style>