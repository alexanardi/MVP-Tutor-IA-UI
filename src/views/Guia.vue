<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Sidebar from '@/components/Sidebar.vue'

import {
  Lightbulb,
  Settings,
  FileText,
  ShieldCheck
} from 'lucide-vue-next'
</script>

<template>
  <div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    <Sidebar />
    <!-- Navbar -->
    <Navbar />

    <!-- Contenido principal -->
    <section class="min-h-screen px-4 py-16">
      <div class="text-center mb-12">
        <h1 class="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-[#36BCFF] leading-tight mb-4">
          Descubre cómo Tutor IA transforma<br />
          el acompañamiento escolar
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Una guía completa para comprender el valor y el potencial de una herramienta centrada en los estudiantes,
          diseñada para apoyar a docentes y directivos con información precisa, en tiempo real y accionable.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition">
          <div class="flex items-center gap-3 mb-4 text-[#36BCFF]">
            <Lightbulb class="w-6 h-6" />
            <h2 class="text-xl font-bold">Inteligencia Educativa</h2>
          </div>
          <p class="text-gray-700 dark:text-gray-300">
            Tutor IA analiza datos académicos y conductuales para generar estrategias pedagógicas personalizadas.
          </p>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition">
          <div class="flex items-center gap-3 mb-4 text-[#36BCFF]">
            <Settings class="w-6 h-6" />
            <h2 class="text-xl font-bold">Automatización Inteligente</h2>
          </div>
          <p class="text-gray-700 dark:text-gray-300">
            Alertas, informes automáticos y reducción de carga operativa para los equipos docentes.
          </p>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition">
          <div class="flex items-center gap-3 mb-4 text-[#36BCFF]">
            <FileText class="w-6 h-6" />
            <h2 class="text-xl font-bold">Informes Automatizados</h2>
          </div>
          <p class="text-gray-700 dark:text-gray-300">
            Exporta PDF completos, comparativas de ciclo y evolución individual o grupal de los estudiantes.
          </p>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition">
          <div class="flex items-center gap-3 mb-4 text-[#36BCFF]">
            <ShieldCheck class="w-6 h-6" />
            <h2 class="text-xl font-bold">Privacidad y Seguridad</h2>
          </div>
          <p class="text-gray-700 dark:text-gray-300">
            Seguridad de datos mediante cifrado, backups automáticos y acceso controlado por roles.
          </p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>
