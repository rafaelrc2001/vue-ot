

<script setup lang="ts">
import EncabezadoOrden from '../components/EncabezadoOrden.vue';
import GraficasOrder from '../components/GraficasOrder.vue';
import MenuPrincipal from '../components/MenuPrincipal.vue';
import PaginationTables from '../components/PaginationTables.vue';
import TablesOrden from '../components/tablesOrden.vue';
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';

const route = useRoute();
const menuOpen = ref(false);
const pageTitle = computed(() => {
    if (route.path === '/dashboard') return 'Tablero';
    if (route.path === '/principal') return 'Órdenes';
    return '';
});
</script>



<template>
    <div class="flex min-h-screen bg-gray-100">
        <!-- Menú superior para móvil/tablet -->
        <header class="md:hidden flex items-center justify-between px-4 py-3 bg-[#353535] text-white shadow-lg w-full fixed top-0 left-0 z-40">
            <h2 class="text-lg font-bold tracking-widest text-[#ff232b] flex items-center gap-2">
                <span class="text-2xl">&#128293;</span> SEGURA-IT principal
            </h2>
            <button @click="menuOpen = !menuOpen" class="focus:outline-none">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
        </header>

        <!-- Drawer/menú lateral para móvil/tablet -->
        <transition name="slide">
            <aside v-show="menuOpen" class="fixed inset-0 z-50 bg-black bg-opacity-40 md:hidden" @click.self="menuOpen = false">
                <div class="w-64 bg-[#353535] min-h-screen flex flex-col shadow-lg">
                    <div class="flex items-center justify-between px-6 py-4 border-b border-gray-700">
                        <h2 class="text-xl font-bold tracking-widest text-[#ff232b] flex items-center gap-2">
                            <span class="text-2xl">&#128293;</span> SEGURA-IT principal
                        </h2>
                        <button @click="menuOpen = false" class="focus:outline-none">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
                        </button>
                    </div>
                    <MenuPrincipal />
                </div>
            </aside>
        </transition>

        <!-- Menú lateral fijo para desktop -->
        <aside class="w-64 bg-[#353535] text-white flex-shrink-0 min-h-screen hidden md:flex flex-col">
            <MenuPrincipal />
        </aside>

        <!-- Contenido principal -->
        <main class="flex-1 flex flex-col p-6 gap-4 w-full" :class="{'mt-16': menuOpen}">
            <!-- Encabezado arriba -->
            <h1 class="text-2xl font-bold text-gray-800 mb-2">{{ pageTitle }}</h1>

            <!-- Gráficas solo si está en /dashboard -->
            <div v-if="route.path === '/dashboard'" class="mb-4">
                <GraficasOrder />
            </div>

            <!-- Tabla y paginación solo si está en /principal -->
            <div v-if="route.path === '/principal'">
                <div class="mb-4">
                    <EncabezadoOrden />
                </div>
                <div class="mb-2">
                    <TablesOrden />
                </div>
                <div>
                    <PaginationTables />
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped>
.slide-enter-active, .slide-leave-active {
    transition: transform 0.3s;
}
.slide-enter-from {
    transform: translateX(-100%);
}
.slide-leave-to {
    transform: translateX(-100%);
}
</style>
