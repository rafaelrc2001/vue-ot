<template>
    
 <div class="app-container">
        <!-- Sidebar (igual al existente) -->
        <aside class="sidebar">
            <!-- Contenido del sidebar igual al original -->
        </aside>

        <!-- Main Content -->
        <main class="main-content">
            <header class="main-header">
                <h1><span style="font-size: 1.2rem;"></span> Orden de trabajo  </h1>
                <div class="header-actions">
                    <button class="btn secondary" id="back-btn">
                        <i class="ri-arrow-left-line"></i> Volver
                    </button>
                </div>
            </header>


            <!-- Form Sections -->
            <form id="complete-permit-form">
                <!-- Sección 1: Encabezado -->
                <section class="form-section active" data-section="1">
                    <div class="form-container">
                        <div class="form-header">
                            <div class="form-icon">
                                <i class="ri-file-text-line"></i>
                            </div>
                            <div>
                                <h2>Información de la Orden de Trabajo</h2>
                                <p>Complete los datos básicos de la Orden de Trabajo</p>
                            </div>
                        </div>



                        <div class="form-grid">
                            
                            <div class="form-group">
                                    <label for="nombre-equipo">Nombre del equipo </label>
                                    <input type="text"  id="nombre-equipo" class="compact" placeholder="Ingrese el nombre de quien recibe">
                            </div>

                            <div class="form-group">
                                    <label for="tag">tag</label>
                                    <input type="text"  id="tag" class="compact" placeholder="Ingrese el tag">
                            </div>

                            <div class="form-group">
                                    <label for="fecha-solicitud">Fecha</label>
                                    <input type="date"  id="fecha-solicitud">
                            </div>

                            <div class="form-group">
                                    <label for="tag">Localizacion</label>
                                    <input type="text"  id="localizacion" class="compact" placeholder="localizacion">
                            </div>

                            <div class="form-group">
                                    <label for="nombre-quien-emite">Nombre y firma de quien emite </label>
                                    <input type="text" id="nombre-quien-emite"  class="compact" placeholder="Ingrese el nombe de quien emite">
                            </div>

                            <div class="form-group">
                                    <label for="nombre-quien-recibe">Nombre y firma de quien recibe </label>
                                    <input type="text" id="nombre-quien-recibe"  class="compact" placeholder="Ingrese el nombe del  equipo">
                            </div>

                            <div class="form-group">
                                <label for="">Tipo de mantenimiento</label>
                                <select id="tipo-de-mantenimiento" >
                                        <option value="" disabled selected>Seleccione un tipo</option>
                                        <option value="Electrico">Electrico</option>
                                        <option value="Mecanico">Mecanico</option>
                                        <option value="Instrumentos">Instrumentos</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="">Prioridad</label>
                                <select id="Prioridad" >
                                        <option value="" disabled selected>Seleccione un tipo</option>
                                        <option value="Urgente">Urgente</option>
                                        <option value="Media">Media</option>
                                        <option value="Programado">Programado</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="mantenimiento-inicia">Mantenimiento inicia en </label>
                                <input type="datetime-local" id="input-mantenimiento-inicia" >
                            </div>

                            <div class="form-group">
                                <label for="mantenimiento-termina">Mantenimiento termina en </label>
                                <input type="datetime-local" id="input-mantenimiento-termina"  >
                            </div>

                            <div class="form-group">
                                <label for="">Tipo de reparación</label>
                                <select id="tipo-reparacion" >
                                        <option value="" disabled selected>Seleccione un tipo</option>
                                        <option value="Mayor">Mayor</option>
                                        <option value="Menor">Menor</option>
                                        <option value="Remplazo">Remplazo</option>
                                </select>
                            </div>
                        
                            
                            <div class="form-group">
                                    <label for="descripcion-trabajo">Descripción del trabajo</label>
                                    <textarea id="descripcion-del-trabajo"  rows="2"></textarea>
                            </div>

                        </div>


             
                        <!-- Botón de navegación alineado a la derecha -->
                        <div style="display: flex; justify-content: flex-end; padding-top: 0.1rem;">
                            <button type="button" id="seccion1" class="btn primary next-step" data-next="2">
                                Enviar <i class="ri-arrow-right-line"></i>
                            </button>
                        </div>
                
                    </div>
               <!-- Fin Sección 1: Encabezado -->
                </section>
        

            </form>

        </main>
</div>

    <!-- Modal de confirmación -->
    <div class="modal" id="confirmation-modal">
        <div class="modal-content">
            <div class="modal-icon success">
                <i class="ri-checkbox-circle-line"></i>
            </div>
            <h3>La orden se creo exitosamente </h3>
            <p>La orden de trabajo ha sido registrada en el sistema con el número: <strong id="generated-permit">GSI-SI-FO-002-XXXX</strong></p>
            <div class="modal-actions">
                <button class="btn secondary" id="modal-close-btn">Cerrar</button>             
            </div>
        </div>
    </div>

  

    <div id="loader-ubicacion" style="display:none;position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:9999;align-items:center;justify-content:center;background:rgba(255,255,255,0.7)">
  <div style="font-size:2em;">Obteniendo ubicación...</div>
</div>


  
            

    </template>