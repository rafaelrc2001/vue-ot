

<template>
	<MenuPrincipal />
	<div style="padding: 1rem;">
		<h2>{{ pageTitle }}</h2>
		<EncabezadoOrden @nuevo-orden="mostrarFormulario = true" />
		<TablesOrden v-if="!mostrarFormulario" />
		<PaginationTables v-if="!mostrarFormulario" />
		<FormOrden v-if="mostrarFormulario" @orden-creada="mostrarFormulario = false" />
	</div>
</template>



<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import EncabezadoOrden from '../components/EncabezadoOrden.vue';
import MenuPrincipal from '../components/MenuPrincipal.vue';
import PaginationTables from '../components/PaginationTables.vue';
import TablesOrden from '../components/tablesOrden.vue';
import FormOrden from '../components/FormOrden.vue';

const mostrarFormulario = ref(false);
const route = useRoute();
const pageTitle = computed(() => {
	if (route.path === '/dashboard') return 'Tablero';
	if (route.path === '/crear-ot') return 'Ordenes';
	return 'Autorizar Orden';
});
</script>