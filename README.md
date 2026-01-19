# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).





src/
  assets/                # Imágenes, íconos, etc.
  components/            # Componentes reutilizables (botones, inputs, tablas, etc.)
  views/                 # Vistas principales (Login, Dashboard, Crear OT, Autorizar OT)
    LoginView.vue
    DashboardView.vue
    CrearOTView.vue
    AutorizarOTView.vue
  router/                # Configuración de rutas (vue-router)
    index.ts
  store/                 # Estado global (Pinia o Vuex, opcional pero recomendado para auth)
    index.ts
  services/              # Lógica de negocio, llamadas a API, autenticación, etc.
    authService.ts
    ordenesService.ts
  App.vue                # Componente raíz
  main.ts                # Punto de entrada
  style.css              # Estilos globales