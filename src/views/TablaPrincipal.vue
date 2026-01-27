<script setup lang="ts">
import TablaContenido from '@/components/commond/tabla/TablaContenido.vue'
import TablaEncabezado from '@/components/commond/tabla/TablaEncabezado.vue'
</script>

<template>
  <TablaEncabezado />

  <div class="overflow-x-auto">
    <TablaContenido />
  </div>
</template>
