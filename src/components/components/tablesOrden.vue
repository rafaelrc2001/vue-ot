<template>

      <section class="permits-table">
          <div class="table-header">
            <h3>Listado de Ordenes</h3>
          </div>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th >Ordenes</th>
                  <th class="descripcion-col">Descripción del Trabajo</th>
                  <th>Área</th>
                  <th>Fecha y hora</th>
                  <th style="text-align: center;">Estatus</th>
           
                 
                  <th>Ver</th>
                 </tr>     
              </thead>
              <tbody id="table-body">
                <!-- Aquí se llenarán las filas dinámicamente -->
              </tbody>
            </table>
          </div>
          <div class="table-footer">
            <div class="pagination">
              <button class="pagination-btn">
                <i class="ri-arrow-left-s-line"></i>
              </button>
              <button class="pagination-btn active">1</button>
              <button class="pagination-btn">2</button>
              <button class="pagination-btn">3</button>
              <button class="pagination-btn">
                <i class="ri-arrow-right-s-line"></i>
              </button>
            </div>
            <div class="records-counter">
              <span id="records-count">0</span> registros
            </div>
          </div>
        </section>


</template>