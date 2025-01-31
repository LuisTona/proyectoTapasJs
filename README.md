Participantes:
 
Luis Alberto, Adrián Gavela, Alejandro Martínez
 
Descripción:
 
Este proyecto mejora una aplicación web mediante el uso de AJAX, permitiendo a los usuarios loguearse, cargar la información de bares/tapas, incluir una galería destacada, realizar búsquedas y disponer de paginación.
 
Requisitos previos:
 
HTML5: Para la estructura de los formularios y el contenido.
CSS: Estilos básicos de la página. 
JavaScript: Lógica de la aplicación.
AJAX: Implementación de AJAX utilizando la API Fetch.
API: Integración de una API para la obtención de datos.
 
Historias de Usuario:
 
Historia de Usuario 1: Como cliente
 
Se añadió un buscador en el header el cual permite buscar las tapas según el nombre de la tapa, nombre del bar o la descripción.
 
Historia de Usuario 2: Como product owner
 
La selección de productos/servicios destacados está situado en el carrusel, el cual mostrará las tapas más populares.
 
Historia de Usuario 3: Como administrador
 
El administrador puede loguearse y poder gestionar las tapas ya sea modificando, añadiendo tapas o eliminándolas.
 
Historia de Usuario 4: Como cliente
 
El cliente puede registrarse y loguearse en la aplicación. Una vez logueados este tiene la opción de marcar tapas como favoritos presionando el icono del corazón situado en la esquina superior derecha de cada carta de bar. Una vez añadido podrá pulsar el botón para filtrar varitos y que solo aparezcan aquellas tapas que fueron marcadas previamente como favoritas por el usuario. Si vuelve a pulsar el botón de filtrar favoritos volverá a enseñar todas las tapas de la galería.
 
Instrucciones de uso:
1-Crear la estructura

Para poder comenzar a usar el proyecto debe crear la estructura htdocs/DWES/www en un entorno de servidor local como xampp y clonar el repositorio:

2-Clonar el repositorio
Usar el comando 
git clone https://github.com/LuisTona/proyectoTapasJs.git

3-Instalar composer/vendor

Una vez clonado el repositorio, debe abrir la consola, situarse en la carpeta del proyecto proyectoTapasJs y debe ejecutar el comando
composer require firebase/php-jwt.

4-Utilización del proyecto

Una vez realizados los pasos anteriores abre el archivo index.html en tu navegador y podras disfrutar de la aplicacion web.