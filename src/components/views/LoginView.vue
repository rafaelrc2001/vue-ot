<template>
    <div class="login-container">
        <div class="login-header">
            <h1>ORDENES DE TRABAJO</h1>
        </div>
        <form class="login-form" @submit="handleLogin">
            <div class="input-group custom-input-group">
                <span class="input-vertical-bar"></span>
                <input v-model="username" type="text" id="username" required />
                <label for="username">usuario</label>
            </div>
            <div class="input-group custom-input-group">
                <span class="input-vertical-bar"></span>
                <input v-model="password" type="password" id="password" required />
                <label for="password">contraseña</label>
            </div>
            <button type="submit" class="login-btn">
                <span class="btn-text">Login</span>
                <div class="btn-loader"></div>
            </button>
            <div v-if="error" style="color: red; margin-top: 10px;">{{ error }}</div>
            <div class="login-footer">
                <button type="button" id="btn-actualizar-contraseña" class="login-btn" style="background-color: #262626;">
                    <span class="btn-text">Actualizar contraseña</span>
                    <div class="btn-loader"></div>
                </button>
            </div>
        </form>
        <!-- ...modales y otros elementos... -->
    </div>
</template>




                                <script setup lang="ts">
                import { ref } from 'vue';
                import { useRouter } from 'vue-router';
                import auth from '../services/authServices.vue';

                const username = ref('');
                const password = ref('');
                const error = ref('');
                const router = useRouter();

                function handleLogin(e: Event) {
                    e.preventDefault();
                    if (auth.login(username.value, password.value)) {
                        error.value = '';
                        router.push('/dashboard');
                    } else {
                        error.value = 'Usuario o contraseña incorrectos';
                    }
                }
                </script>