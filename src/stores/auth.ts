import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<string | null>(null)
  const role = ref<'usuario' | 'jefe' | 'departamento' | 'supervisor' | null>(null)

  function login(selectedRole: 'usuario' | 'jefe' | 'departamento' | 'supervisor') {
    // Simulación de login automático
    user.value = 'demo@demo.com'
    role.value = selectedRole
  }

  function logout() {
    user.value = null
    role.value = null
  }

  return { user, role, login, logout }
})
