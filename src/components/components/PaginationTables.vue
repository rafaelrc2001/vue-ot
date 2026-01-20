<template>
  <div class="flex items-center justify-between p-4 border-t border-blue-gray-50">
    <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
      Página 1 de 10
    </p>
    <div class="flex gap-2">
      <button
        class="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button">
        Anterior
      </button>
      <button
        class="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button">
        Siguiente
      </button>
    </div>
  </div>
  <div class="flex justify-end px-4 pb-2 text-sm text-gray-500">
    <span>0 registros</span>
  </div>
</template>