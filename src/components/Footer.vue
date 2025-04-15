<script setup lang="ts">
const footerLinks = {
  resources: [
    { name: 'Documentación', url: 'https://vuejs.org' },
    { name: 'Plugins', url: 'https://vuejs.org/ecosystem/plugins.html' },
    { name: 'Temas', url: 'https://vuejs.org/ecosystem/themes.html' },
    { name: 'Blog', url: 'https://blog.vuejs.org' },
  ],
  ecosystem: [
    { name: 'Vue Router', url: 'https://router.vuejs.org' },
    { name: 'Pinia', url: 'https://pinia.vuejs.org' },
    { name: 'Vite', url: 'https://vitejs.dev' },
    { name: 'Nuxt', url: 'https://nuxt.com' },
  ],
  community: [
    { name: 'Discord', url: 'https://discord.com/invite/vue' },
    { name: 'GitHub', url: 'https://github.com/vuejs' },
    { name: 'Twitter', url: 'https://twitter.com/vuejs' },
    { name: 'DEV Community', url: 'https://dev.to/t/vue' },
  ]
}
</script>

<template>
  <footer class="border-t border-gray-200 dark:border-gray-700">
    <div class="max-w-7xl mx-auto py-12 px-4">
      <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
        <!-- Resources -->
        <div>
          <h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
            Recursos
          </h3>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.resources" :key="link.name">
              <a
                :href="link.url"
                target="_blank"
                rel="noopener"
                class="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Ecosystem -->
        <div>
          <h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
            Ecosistema
          </h3>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.ecosystem" :key="link.name">
              <a
                :href="link.url"
                target="_blank"
                rel="noopener"
                class="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Community -->
        <div>
          <h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
            Comunidad
          </h3>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.community" :key="link.name">
              <a
                :href="link.url"
                target="_blank"
                rel="noopener"
                class="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
        <p class="text-center text-base text-gray-500 dark:text-gray-400">
          &copy; {{ new Date().getFullYear() }} Tutor IA. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>