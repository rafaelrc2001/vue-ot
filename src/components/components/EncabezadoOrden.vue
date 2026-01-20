
<template>
  <!-- Actions Section -->
  <section class="flex flex-col md:flex-row items-center justify-between gap-4 py-4 px-2 rounded shadow mb-4 bg-gray-50">
    <div class="flex gap-2">
      <button id="export-excel-crear"
        class="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button">
        <i class="fas fa-file-excel"></i> Exportar a Excel
      </button>
      <button id="btnNuevoPermiso" @click="$emit('nuevo-orden')"
        class="flex select-none items-center gap-3 rounded-lg bg-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button">
        <i class="fas fa-plus"></i> Generar Nueva Orden
      </button>
    </div>
    <div class="flex items-center gap-2">
      <select class="px-3 py-2 border border-slate-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm bg-white">
        <option value="all">Todos</option>
      </select>
      <i class="fas fa-filter text-gray-400"></i>
    </div>
  </section>
</template>


<script setup lang="ts">
// No se necesita router aquí, solo emitimos el evento
</script>