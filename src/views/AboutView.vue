<template>
  ordenes
  <TablaEncabezado />

  <div class="overflow-x-auto">
    <TablaContenido />
  </div>
</template>

<script lang="ts" setup>
import TablaContenido from '@/components/commond/tabla/TablaContenido.vue'
import TablaEncabezado from '@/components/commond/tabla/TablaEncabezado.vue'
</script>
