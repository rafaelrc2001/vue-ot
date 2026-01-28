<template>
  <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
    <legend class="fieldset-legend">Login</legend>

    <label class="label">Selecciona tu rol</label>
    <select v-model="selectedRole" class="select select-bordered w-full mb-4">
      <option disabled value="">Selecciona un rol</option>
      <option value="usuario">Usuario</option>
      <option value="jefe">Jefe</option>
      <option value="departamento">Departamento</option>
      <option value="supervisor">Supervisor</option>
    </select>

    <button class="btn btn-neutral mt-4 w-full" :disabled="!selectedRole" @click="login">
      Login
    </button>
    <div v-if="authStore.role" class="mt-4 alert alert-success">
      Sesión iniciada como <b>{{ authStore.role }}</b>
    </div>
  </fieldset>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const authStore = useAuthStore()
const selectedRole = ref('')
const router = useRouter()

function login() {
  if (selectedRole.value) {
    authStore.login(selectedRole.value as 'usuario' | 'jefe' | 'departamento' | 'supervisor')
  }
}

// Redirigir si ya está autenticado
watchEffect(() => {
  if (authStore.role) {
    router.replace({ name: 'home' })
  }
})
</script>
