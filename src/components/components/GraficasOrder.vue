<template>
  <div class="w-full max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
    <h3 class="text-xl font-bold mb-4 text-center">Órdenes por Estatus</h3>
    <canvas ref="chartRef"></canvas>
<h1>ESTA ES LA PARTE DE LA GRAFICA ESTA ES LA QUE SE DEBERIA VER</h1>

  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Chart from 'chart.js/auto';

const chartRef = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  if (chartRef.value) {
    new Chart(chartRef.value, {
      type: 'bar',
      data: {
        labels: ['Pendiente', 'En Proceso', 'Completada', 'Cancelada'],
        datasets: [
          {
            label: 'Órdenes',
            data: [12, 19, 7, 3],
            backgroundColor: [
              '#fbbf24', // amarillo
              '#3b82f6', // azul
              '#10b981', // verde
              '#ef4444', // rojo
            ],
            borderRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { stepSize: 1 },
          },
        },
      },
    });
  }
});
</script>

<style scoped>
</style>
