<template>
    <nav :class="['relative flex flex-col rounded-xl bg-[#232323] bg-clip-border p-4 text-white shadow-xl shadow-[#232323]/50 transition-all duration-300', isOpen ? 'h-[calc(100vh-2rem)] max-w-[20rem] w-full' : 'h-[calc(100vh-2rem)] w-16 min-w-[4rem]']">
        <div class="p-4 mb-2 flex items-center justify-between">
            <h5 v-if="isOpen" class="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-white">
                Menú
            </h5>
            <button @click="isOpen = !isOpen" class="ml-auto p-2 rounded hover:bg-[#2a2a2a] transition">
                <svg v-if="isOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
        <ul :class="[isOpen ? 'flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-white' : 'flex flex-col items-center gap-4 mt-8']">
            <li>
                <router-link to="/dashboard"
                    class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none bg-[#2a2a2a] text-start text-white hover:bg-[#353535] hover:text-[#ff232b] focus:bg-[#353535] focus:text-[#ff232b] active:bg-[#353535] active:text-[#ff232b]">
                    <svg class="w-5 h-5 mr-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6"/></svg>
                    <span v-if="isOpen">Tablero</span>
                </router-link>
            </li>
            <li>
                <router-link to="/principal"
                    class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none bg-[#2a2a2a] text-start text-white hover:bg-[#353535] hover:text-[#ff232b] focus:bg-[#353535] focus:text-[#ff232b] active:bg-[#353535] active:text-[#ff232b]">
                    <svg class="w-5 h-5 mr-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 17l4 4 4-4m0-5V3a1 1 0 00-1-1H7a1 1 0 00-1 1v9"/></svg>
                    <span v-if="isOpen">Ordenes</span>
                </router-link>
            </li>
        </ul>
        <div v-show="isOpen" class="mt-8 border-t border-[#353535] pt-4 flex flex-col gap-2">
            <div class="text-sm text-white font-semibold">{{ nombre || 'Nombre' }}</div>
            <button @click="logout" class="w-full py-2 bg-[#ff232b] hover:bg-[#e31b23] text-white rounded-lg font-bold transition">Salir</button>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import auth from '../services/authServices.vue';
const props = defineProps<{ nombre?: string }>();
const isOpen = ref(true);
const router = useRouter();

function logout() {
    if (auth.logout) auth.logout();
    router.push('/login');
}
</script>