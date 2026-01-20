<template>
    
  <!-- Actions Section -->
  <section class="actions-section">
    <button id="btnNuevoPermiso" @click="$emit('nuevo-orden')">
      <i></i> Generar Nueva Orden
    </button>

    <!-- Botón específico para exportar desde la vista Crear-PT -->
    <button id="export-excel-crear">
      <i></i> Exportar a Excel
    </button>

    <div>
      <select>
        <option value="all">Todos</option>
      </select>
      <i></i>
    </div>
  </section>
</template>


<script setup lang="ts">
// No se necesita router aquí, solo emitimos el evento
</script>