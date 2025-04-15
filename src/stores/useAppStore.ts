import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    darkMode: false,
    sidebarOpen: false
  }),
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode
      document.documentElement.classList.toggle('dark')
    },
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen
    }
  },
  persist: true
})