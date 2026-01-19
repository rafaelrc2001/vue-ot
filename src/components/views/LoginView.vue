<template>
  
    <body>
            <div class="particles" id="particles-js"></div>
            <div class="login-container">
            <div class="login-header">
                <div class="logos-container">
                
                </div>
            
                <h1>ORDENES DE TRABAJO</h1>
            
            
            </div>

            <form class="login-form">

                <div class="input-group custom-input-group">
           
                <span class="input-vertical-bar"></span>
                <input type="text" id="username" required />
                <label for="username">usuario</label>
                </div>

                <div class="input-group custom-input-group">
           s
                <span class="input-vertical-bar"></span>
                <input type="password" id="password" required />
                <label for="password">contraseña</label>
                </div>

                <button type="submit" class="login-btn">
                <span class="btn-text">Login</span>
                <div class="btn-loader"></div>
                </button>

                <div class="login-footer">
                <button type="button" id="btn-actualizar-contraseña" class="login-btn" style="background-color: #262626;">
                    <span class="btn-text">Actualizar contraseña</span>
                    <div class="btn-loader"></div>
                </button>
                </div>
            </form>
            </div>








            <div id="actualizar-contraseña" class="forgot-modal" style="display: none">
            <div class="forgot-modal-content">
                <h3 style="color: white;">Actualizar Contraseña</h3>
                <div class="input-group custom-input-group">        
                <span class="input-vertical-bar"></span>
                <input type="text" id="username-actualizar" required />
                <label for="username-actualizar">usuario</label>
                </div>
                <div class="input-group custom-input-group">       
                <span class="input-vertical-bar"></span>
                <input type="password" id="password-actualizar" required />
                <label for="password-actualizar">contraseña</label>
                </div>
                <div class="input-group custom-input-group">
                <input type="password" id="password_nueva" required />
                <label for="password_nueva">nueva contraseña</label>
                </div>
                <button id="btn-guardar-actualizar" class="login-btn" style="background-color: #262626; margin-top: 12px;">Guardar</button>
                <button id="close-actualizar-modal" class="forgot-modal-btn">Cerrar</button>
            </div>
            </div>



            <div id="forgot-modal" class="forgot-modal" style="display: none">
            <div class="forgot-modal-content">
                <div class="forgot-modal-icon">
                <i class="bx bx-error-circle"></i>
                </div>
                <h3>Recuperación de Contraseña</h3>
                <p>
                Para recuperar tu acceso, por favor contacta al administrador:<br />
                <b>Teléfono:</b>
                <a href="tel:1243235425" style="color: #262626">124 323 5425</a>
                <span style="color: #7f8c8d">(Ext. 3656)</span><br />
                <b>Correo:</b>
                <a href="mailto:admin@tusistema.com" style="color: #262626"
                    >admin@tusistema.com</a
                >
                </p>
                <button id="close-forgot-modal" class="forgot-modal-btn">Cerrar</button>
            </div>
            </div>
    </body>
</template>