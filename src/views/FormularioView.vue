<script setup lang="ts">
import BotonCancelar from '@/components/commond/BotonCancelar.vue'
</script>

<template>
  <form
    id="complete-permit-form"
    class="max-w-4xl mx-auto p-6 bg-base-200 rounded-lg shadow grid gap-6"
  >
    <div class="col-span-full flex items-start justify-between">
      <div>
        <h2 class="text-xl font-bold mb-1">Información de la Orden de Trabajo</h2>
        <p class="mb-4">Complete los datos básicos de la Orden de Trabajo</p>
      </div>
      <BotonCancelar />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 col-span-full">
      <label class="floating-label">
        <span>Nombre del equipo</span>
        <input
          type="text"
          placeholder="Ingrese el nombre del equipo"
          class="input input-md w-full"
        />
      </label>
      <label class="floating-label">
        <span>Tag</span>
        <input type="text" placeholder="Ingrese el Tag" class="input input-md w-full" />
      </label>
      <label class="floating-label">
        <span>Fecha</span>
        <input type="date" id="fecha-solicitud" class="input input-md w-full" />
      </label>
      <label class="floating-label">
        <span>Localización</span>
        <input type="text" placeholder="Localizacion" class="input input-md w-full" />
      </label>
      <label class="floating-label">
        <span>Nombre y firma de quien emite</span>
        <input
          type="text"
          placeholder="Ingrese el nombre de quien emite"
          class="input input-md w-full"
        />
      </label>
      <label class="floating-label">
        <span>Nombre y firma de quien recibe</span>
        <input type="text" placeholder="nombre de quien recibe" class="input input-md w-full" />
      </label>
      <label class="floating-label">
        <span>Tipo de mantenimiento</span>
        <select id="tipo-de-mantenimiento" class="select select-md w-full">
          <option value="" disabled selected>Seleccione un tipo</option>
          <option value="Electrico">Electrico</option>
          <option value="Mecanico">Mecanico</option>
          <option value="Instrumentos">Instrumentos</option>
        </select>
      </label>
      <label class="floating-label">
        <span>Prioridad</span>
        <select class="select select-md w-full">
          <option value="" disabled selected>Seleccione un tipo</option>
          <option value="Urgente">Urgente</option>
          <option value="Media">Media</option>
          <option value="Programado">Programado</option>
        </select>
      </label>
      <label class="floating-label">
        <span>Mantenimiento inicia en</span>
        <input
          type="datetime-local"
          id="input-mantenimiento-inicia"
          class="input input-md w-full"
        />
      </label>
      <label class="floating-label">
        <span>Mantenimiento termina en</span>
        <input
          type="datetime-local"
          id="input-mantenimiento-termina"
          class="input input-md w-full"
        />
      </label>
      <label class="floating-label">
        <span>Tipo</span>
        <select class="select select-md w-full">
          <option value="" disabled selected>Seleccione un tipo</option>
          <option value="Mayor">Mayor</option>
          <option value="Menor">Menor</option>
          <option value="Remplazo">Remplazo</option>
        </select>
      </label>
      <label class="floating-label md:col-span-3">
        <span>Descripción del trabajo</span>
        <textarea id="descripcion-del-trabajo" rows="2" class="input input-md w-full"></textarea>
      </label>
    </div>
    <div class="col-span-full flex justify-end">
      <button class="btn">Enviar</button>
    </div>
  </form>
</template>
