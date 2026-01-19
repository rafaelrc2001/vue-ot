<template>
    
 <div class="app-container">
        <!-- Sidebar (igual al existente) -->
        <aside>
            <!-- Contenido del sidebar igual al original -->
        </aside>

        <!-- Main Content -->
        <main class="main-content">
            <header class="main-header">
                <h1><span></span> Orden de trabajo  </h1>
                <div>
                    <button id="back-btn">
                        <i></i> Volver
                    </button>
                </div>
            </header>


            <!-- Form Sections -->
            <form id="complete-permit-form">
                <!-- Sección 1: Encabezado -->
                <section data-section="1">
                    <div>
                        <div>
                            <div>
                                <i></i>
                            </div>
                            <div>
                                <h2>Información de la Orden de Trabajo</h2>
                                <p>Complete los datos básicos de la Orden de Trabajo</p>
                            </div>
                        </div>



                        <div>
                            
                            <div>
                                    <label for="nombre-equipo">Nombre del equipo </label>
                                    <input type="text"  id="nombre-equipo" placeholder="Ingrese el nombre de quien recibe">
                            </div>

                            <div>
                                    <label for="tag">tag</label>
                                    <input type="text"  id="tag" placeholder="Ingrese el tag">
                            </div>

                            <div class="form-group">
                                    <label for="fecha-solicitud">Fecha</label>
                                    <input type="date"  id="fecha-solicitud">
                            </div>

                            <div class="form-group">
                                    <label for="tag">Localizacion</label>
                                    <input type="text"  id="localizacion" placeholder="localizacion">
                            </div>

                            <div class="form-group">
                                    <label for="nombre-quien-emite">Nombre y firma de quien emite </label>
                                    <input type="text" id="nombre-quien-emite" placeholder="Ingrese el nombe de quien emite">
                            </div>

                            <div class="form-group">
                                    <label for="nombre-quien-recibe">Nombre y firma de quien recibe </label>
                                    <input type="text" id="nombre-quien-recibe" placeholder="Ingrese el nombe del  equipo">
                            </div>

                            <div >
                                <label for="">Tipo de mantenimiento</label>
                                <select id="tipo-de-mantenimiento" >
                                        <option value="" disabled selected>Seleccione un tipo</option>
                                        <option value="Electrico">Electrico</option>
                                        <option value="Mecanico">Mecanico</option>
                                        <option value="Instrumentos">Instrumentos</option>
                                </select>
                            </div>

                            <div>
                                <label for="">Prioridad</label>
                                <select id="Prioridad" >
                                        <option value="" disabled selected>Seleccione un tipo</option>
                                        <option value="Urgente">Urgente</option>
                                        <option value="Media">Media</option>
                                        <option value="Programado">Programado</option>
                                </select>
                            </div>

                            <div>
                                <label for="mantenimiento-inicia">Mantenimiento inicia en </label>
                                <input type="datetime-local" id="input-mantenimiento-inicia" >
                            </div>

                            <div>
                                <label for="mantenimiento-termina">Mantenimiento termina en </label>
                                <input type="datetime-local" id="input-mantenimiento-termina"  >
                            </div>

                            <div >
                                <label for="">Tipo de reparación</label>
                                <select id="tipo-reparacion" >
                                        <option value="" disabled selected>Seleccione un tipo</option>
                                        <option value="Mayor">Mayor</option>
                                        <option value="Menor">Menor</option>
                                        <option value="Remplazo">Remplazo</option>
                                </select>
                            </div>
                        
                            
                            <div>
                                    <label for="descripcion-trabajo">Descripción del trabajo</label>
                                    <textarea id="descripcion-del-trabajo"  rows="2"></textarea>
                            </div>

                        </div>


             
                        <!-- Botón de navegación alineado a la derecha -->
                        <div>
                            <button type="button" id="seccion1"  data-next="2">
                                Enviar <i></i>
                            </button>
                        </div>
                
                    </div>
             
                </section>
        

            </form>

        </main>

</div>



            <!-- Modal de confirmación -->
            <div id="confirmation-modal">
                <div >
                    <div >
                        <i></i>
                    </div>
                    <h3>La orden se creo exitosamente </h3>
                    <p>La orden de trabajo ha sido registrada en el sistema con el número: <strong id="generated-permit">GSI-SI-FO-002-XXXX</strong></p>
                    <div class="modal-actions">
                        <button id="modal-close-btn">Cerrar</button>             
                    </div>
                </div>
            </div>

  

            <div id="loader-ubicacion">
            <div style="font-size:2em;">Obteniendo ubicación...</div>
            </div>


  
            

    </template>