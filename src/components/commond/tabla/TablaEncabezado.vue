<template>
  <div class="w-full flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
    <div class="flex flex-1 gap-2 md:justify-start">
      <button class="btn btn-outline btn-primary">Crear orden</button>
      <button class="btn btn-outline btn-secondary">exportar csv</button>
    </div>
    <div class="flex flex-1 gap-2 items-center justify-center">
      <label class="input w-full max-w-xs">
        <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" required placeholder="Search" class="w-full" />
      </label>
    </div>
    <div class="flex flex-1 gap-2 items-center justify-end">
      <select class="select select-neutral max-w-xs">
        <option disabled selected>Server location</option>
        <option>North America</option>
        <option>EU west</option>
        <option>South East Asia</option>
      </select>
    </div>
  </div>
</template>
