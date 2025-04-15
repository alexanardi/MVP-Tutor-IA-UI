<script setup lang="ts">
import { useAppStore } from '../stores/useAppStore'
import { Menu, Sun, Moon } from 'lucide-vue-next'

const store = useAppStore()

const menuItems = [
  { name: 'Inicio', icon: '🏠', route: '/' },
  { name: 'Guía', icon: '📁', route: '/guia' },
  { name: 'Contáctanos', icon: '✉️', route: '/contacto' },
]
</script>

<template>
  <nav class="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 sticky top-0 z-10">
    <div class="w-full px-4">
      <div class="flex justify-between h-16 items-center">
        <div class="flex items-center space-x-4">
          <!-- Botón de menú (solo móvil) -->
          <button
            @click="store.toggleSidebar"
            class="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white p-2 md:hidden"
          >
            <Menu class="w-6 h-6" />
          </button>

          <!-- Logo -->
          <div class="flex items-center">
            <img src="../assets/robot.png" class="h-8 w-8" alt="Vue logo" />
            <span class="ml-2 text-xl font-semibold text-gray-900 dark:text-white">Tutor IA</span>
          </div>

          <!-- Menú horizontal (desktop) -->
          <nav class="hidden md:flex space-x-4 ml-8">
            <router-link
              v-for="item in menuItems"
              :key="item.name"
              :to="item.route"
              class="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {{ item.name }}
            </router-link>
          </nav>
        </div>

        <!-- Tema e Iniciar sesión -->
        <div class="flex items-center space-x-4">
          <button
            @click="store.toggleDarkMode"
            class="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
          >
            <Sun v-if="store.darkMode" class="w-5 h-5" />
            <Moon v-else class="w-5 h-5" />
          </button>

          <router-link
            to="/login"
            class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#36BCFF] transition-colors"
          >
            Iniciar sesión
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
