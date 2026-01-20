<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-[#232323] py-8 px-4">
        <div class="w-full max-w-2xl flex flex-col items-center gap-8">
            <div class="w-full flex justify-between items-center mb-2">
                <img :src="proagroLogo" alt="Pro Agroindustria" class="h-10 md:h-12" />
                <img :src="pemexLogo" alt="PEMEX" class="h-10 md:h-12" />
            </div>
            <div class="text-center mb-4">
                <div class="flex flex-col items-center">
                    <span class="text-4xl text-[#ff232b] font-bold mb-2"><i class="fa-solid fa-fire"></i></span>
                    <h1 class="text-3xl md:text-4xl font-bold tracking-widest text-white flex items-center gap-2">
                        <span class="text-[#ff232b]"></span>Orden de Trabajo
                    </h1>
                </div>
            </div>
            <div class="w-full max-w-lg bg-[#2a2a2a] rounded-xl shadow-lg p-8 flex flex-col gap-6">
                <form @submit="handleLogin" class="flex flex-col gap-4">
                    <div class="flex flex-col gap-1">
                        <label for="username" class="text-base font-medium text-gray-300 flex items-center gap-2">
                            <span class="text-yellow-400"><i class="fa-solid fa-network-wired"></i></span>usuario
                        </label>
                        <input v-model="username" type="text" id="username" required
                            class="px-4 py-2 bg-[#353535] border border-[#444] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff232b] transition w-full placeholder-gray-400" />
                    </div>
                    <div class="flex flex-col gap-1">
                        <label for="password" class="text-base font-medium text-gray-300 flex items-center gap-2">
                            <span class="text-yellow-400"><i class="fa-solid fa-key"></i></span>contraseña
                        </label>
                        <input v-model="password" type="password" id="password" required
                            class="px-4 py-2 bg-[#353535] border border-[#444] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff232b] transition w-full placeholder-gray-400" />
                    </div>
                    <button type="submit"
                        class="w-full py-3 mt-2 bg-[#ff232b] hover:bg-[#e31b23] text-white font-semibold rounded-lg shadow transition flex items-center justify-center gap-2 text-lg">
                        <span>Login</span>
                        <div class="btn-loader"></div>
                    </button>
                    <div v-if="error" class="text-red-500 text-center text-sm mt-2">{{ error }}</div>
                </form>
                <div class="flex justify-center mt-4">
                    <button type="button" id="btn-actualizar-contraseña"
                        class="py-2 px-6 bg-[#232323] hover:bg-[#353535] text-white font-bold rounded-lg shadow transition border border-[#232323] text-base">
                        Actualizar contraseña
                    </button>
                </div>
            </div>
            <!-- ...modales y otros elementos... -->
        </div>
    </div>
</template>




<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import auth from '../services/authServices.vue';
import proagroLogo from '../../assets/proagro.png';
import pemexLogo from '../../assets/pemex.png';

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