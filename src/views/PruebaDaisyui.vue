<template>
  
  <div class="card w-full max-w-3xl bg-base-100 shadow-xl">
    <div class="card-body space-y-6">

      <!-- Título -->
      <h1 class="text-3xl font-bold text-center">
        DaisyUI Theme Tester
      </h1>

      <!-- Selector de tema -->
      <div class="form-control">
        <label class="label">
          <span class="label-text">Selecciona un tema</span>
        </label>
        <select
          class="select select-bordered"
          onchange="setTheme(this.value)"
        >
          <option>light</option>
          <option>dark</option>
          <option>cupcake</option>
          <option>bumblebee</option>
          <option>emerald</option>
          <option>corporate</option>
          <option>synthwave</option>
          <option>retro</option>
          <option>cyberpunk</option>
          <option>valentine</option>
          <option>halloween</option>
          <option>forest</option>
          <option>aqua</option>
          <option>luxury</option>
          <option>dracula</option>
        </select>
      </div>

      <!-- Botones -->
      <div class="flex flex-wrap gap-3 justify-center">
        <button class="btn btn-primary">Primary</button>
        <button class="btn btn-secondary">Secondary</button>
        <button class="btn btn-accent">Accent</button>
        <button class="btn btn-info">Info</button>
        <button class="btn btn-success">Success</button>
        <button class="btn btn-warning">Warning</button>
        <button class="btn btn-error">Error</button>
      </div>

      <!-- Card de ejemplo -->
      <div class="card bg-base-200">
        <div class="card-body">
          <h2 class="card-title">Orden de trabajo #1023</h2>
          <p>Revisión de equipo y mantenimiento preventivo.</p>
          <div class="card-actions justify-end">
            <button class="btn btn-outline btn-primary">Ver</button>
            <button class="btn btn-outline btn-error">Cancelar</button>
          </div>
        </div>
      </div>

      <!-- Tabla -->
      <div class="overflow-x-auto">
        <table class="table table-zebra">
          <thead>
            <tr>
              <th>ID</th>
              <th>Usuario</th>
              <th>Estatus</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Diego</td>
              <td><span class="badge badge-success">Aprobado</span></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Supervisor</td>
              <td><span class="badge badge-warning">Pendiente</span></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Jefe</td>
              <td><span class="badge badge-error">Rechazado</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Alert -->
      <div class="alert alert-info">
        <span>
          Cambia el tema y observa cómo todos los componentes se adaptan automáticamente.
        </span>
      </div>

    </div>
  </div>



</template>