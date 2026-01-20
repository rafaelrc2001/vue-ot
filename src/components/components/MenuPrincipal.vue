<template>
    <nav class="flex-1 px-4 py-6 bg-[#353535] text-white">
        <ul class="space-y-2">
            <li>
                <router-link to="/dashboard" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#232323] transition font-medium">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6"/></svg>
                    <span>Tablero</span>
                </router-link>
            </li>
            <li>
                <router-link to="/principal" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#232323] transition font-medium">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 17l4 4 4-4m0-5V3a1 1 0 00-1-1H7a1 1 0 00-1 1v9"/></svg>
                    <span>Ordenes</span>
                </router-link>
            </li>
        </ul>
        <div class="mt-8 border-t border-gray-700 pt-4 flex flex-col gap-2">
            <div class="text-sm text-gray-300 font-semibold">{{ nombre || 'Nombre' }}</div>
            <button class="w-full py-2 bg-[#ff232b] hover:bg-[#e31b23] text-white rounded-lg font-bold transition">Salir</button>
        </div>
    </nav>
</template>

<script setup lang="ts">
defineProps<{ nombre?: string }>();
</script>