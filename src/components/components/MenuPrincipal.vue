<template>
        <aside class="sidebar">
        <div class="sidebar-header">
          <h2 class="logo-container">
       <style>
         th.descripcion-col, td.descripcion-col {
           max-width: 260px;
           min-width: 160px;
           width: 220px;
           word-break: break-word;
           white-space: pre-line;
         }
       </style>
            
              <img src="/img/logo blanco.png" alt="Usuario" class="logo-collapse" style="max-width: 80px; max-height: 40px; height: auto; width: auto;" />
          
              <img src="/img/fuego_logo.png" alt="Usuario"  class="logo-main" style="max-width: 140px; max-height: 190px; height: auto; width: auto;" />
               
          </h2>
          <button class="collapse-btn">
            <i class="ri-menu-line menu-icon"></i>
            <i class="ri-arrow-right-s-line collapse-icon"></i>
          </button>
        </div>
        <nav class="sidebar-nav">
          <ul>
            <li>
              <a href="#"
                ><i class="ri-pie-chart-2-line"></i> <span>Tablero</span></a
              >
            </li>
            <li>
              <a href="#"
                ><i class="ri-clipboard-line"></i>
                <span>Ordenes</span></a
              >
            </li>
          </ul>
        </nav>
        <div class="sidebar-footer">
          <div class="user-profile">
            <div class="avatar"></div>
            <div class="user-info">
              <span class="name"></span>
              <span class="role"></span>
            </div>
          </div>
          <button class="logout-btn">
            <i class="ri-logout-box-r-line"></i>
          </button>
        </div>
      </aside>

</template>