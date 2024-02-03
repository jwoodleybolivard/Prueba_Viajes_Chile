$(document).ready(function() {
    // Manejar evento hover
    $('.navbar-nav a').hover(function() {
      $(this).css('color', 'turquoise'); // Aplicar color al pasar el mouse
    }, function() {
      $(this).css('color', ''); // Restaurar el color original al salir el mouse
    });
});

// Crear alerta al clickear en el botón enviar
$("#enviarCorreo").click(function(){
    alert("Recibimos tus Datos. Pronto te contactaremos.");
   });

   $(document).ready(function () {
    // Inicializar tooltips
    $('[data-bs-toggle="tooltip"]').tooltip();
  
    // agregar tooltips a elementos específicos
    $('#github-icon').attr('title', 'GitHub').tooltip();
    $('#linkedin-icon').attr('title', 'LinkedIn').tooltip();
    $('#twitter-icon').attr('title', 'Twitter').tooltip();
    $('#facebook-icon').attr('title', 'Facebook').tooltip();
  });