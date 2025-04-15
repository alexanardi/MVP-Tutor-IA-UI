<script setup lang="ts">
import { useAppStore } from '../stores/useAppStore'
import { Home, Folder, Mail } from 'lucide-vue-next'

const store = useAppStore()

const menuItems = [
  { name: 'Inicio', icon: Home, route: '/' },
  { name: 'Guía', icon: Folder, route: '/guia' },
  { name: 'Contáctanos', icon: Mail, route: '/contacto' },
]
</script>

<template>
  <!-- Sidebar Overlay (solo móvil) -->
  <div
    v-if="store.sidebarOpen"
    @click="store.toggleSidebar"
    class="fixed inset-0 bg-gray-800 bg-opacity-50 z-20 transition-opacity md:hidden"
  ></div>

  <!-- Sidebar (solo móvil) -->
  <div
    :class="[
      'fixed inset-y-0 left-0 w-64 bg-gray-100 dark:bg-gray-900 transform transition-transform duration-300 ease-in-out z-30 md:hidden border-r border-gray-200 dark:border-gray-700',
      store.sidebarOpen ? 'translate-x-0' : '-translate-x-full'
    ]"
  >
    <div class="p-6">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-xl font-semibold text-gray-800 dark:text-white">Menú</h2>
        <button
          @click="store.toggleSidebar"
          class="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
        >
          ✕
        </button>
      </div>
      <nav>
        <ul class="space-y-2">
          <li v-for="item in menuItems" :key="item.name">
            <router-link
              :to="item.route"
              class="flex items-center space-x-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-[#36BCFF] hover:bg-white dark:hover:bg-gray-800 rounded-lg transition-colors"
              @click="store.sidebarOpen = false"
            >
              <component :is="item.icon" class="w-5 h-5 transition-colors" />
              <span class="transition-colors">{{ item.name }}</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
