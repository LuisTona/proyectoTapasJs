README - Conocimiento de JS, DOM y estructuración de proyectos WEB

# Participantes:

Luis Alberto, Adrián Gavela, Alejandro Martínez

Este repositorio contiene la funcionalidad de añadir, modificar y eliminar tapas o solo añadirlas a favoritos, dependiendo del tipo de usuario que sea.

# Requisitos previos:

HTML5: Para la estructura de los formularios y el contenido.
CSS: Estilos básicos de la página.
JavaScript: Lógica de la aplicación y manipulación del DOM.

# Galeria interactiva de tapas:

El proyecto consiste en una galería interactiva de bares de tapas, donde los usuarios puedan ver más información sobre estas, por ejemplo sus ingredientes y añadirlas a favoritos y como administrador se podrá añadir, editar y eliminar las tapas. Este proyecto está construido con JavaScript puro y DOM, sin usar frameworks adicionales.

# Funcionalidades:

El proyecto tiene las siguientes funcionalidades, basadas en las historias de usuario:
Ya que ahora mismo no se pide que se pueda registrar un usuario o un administrador, el archivo data.js contiene varios registros tanto de usuarios como de administradores para que se pueda comprobar la funcionalidad dependiendo de que tipo de usuario sea 

## Historia de Usuario 1: Mostrar Galería de Bares de Tapas

Se genera una galería de bares y tapas a partir de un array de objetos. Cada tarjeta incluye:

	- Nombre del bar
	- Nombre de la tapa
	- Imagen de la tapa (si no se proporciona una imagen se mostrará una genérica
	- Botón para añadir a favoritos (corazón)
	- Modal con más información, donde aparecerá de nuevo el nombre del bar, el nombre de la tapa y los ingredientes que esta tiene

## Historia de Usuario 2: Añadir Nuevos Bares

Como administrador, además de poder hacer lo que un usuario, estos pueden añadir desde el menú desplegable situado en el encabezado de la página una vez el usuario esté registrado. Señalando con el ratón al nombre, se desplegará un menú en el que le permitirá insertar tapa o cerrar sesión. Al seleccionar Insertar Tapa, se abrirá un formulario en el cual le pedirá los datos para poder registrar un nuevo bar con su tapa, imágen (si no tiene se proporcionará una genérica), descripción y los ingredientes.

## Historia de Usuario 3: Marcar Favoritos

Los usuarios pueden marcar sus tapas como favoritas.
Cada tarjeta tiene un botón para marcarla como favorita con el icono de un corazón.

## Historia de Usuario 4: Editar o Eliminar Bares
Como administrador se puede modificar los datos del bar y la tapa, accediendo a esta opción desde el modal de más información situado en cada carta de bar. Este nos llevará a un formulario en el cual al cambiar los datos nos permitirá cambiárselos a la tapa en cuestión.
galeria
También podemos eliminar tapas que ya no queramos tener en nuestra galeria. Al igual que para modificar, accediendo al modal de más información en cada tapa, se desplegará el modal en el que aparecerá el botón de Eliminar.

## Historia de Usuario 5: Filtrar Favoritos

Los usuarios pueden filtrar sus tapas favoritas para que solo se muestren las que han sido marcadas con el corazón. 
Hay un botón que activa el filtro de favoritos.

# Instrucciones de uso:

## Clonar el repositorio

Para poder comenzar a usar el proyecto, debes clonar el repositorio con el siguiente comando:

git clone https://github.com/LuisTona/proyectoTapasJs.git

## Utilización del proyecto

Una vez clonado el repositorio, abre el archivo index.html en tu navegador. Ahí tendrás todo lo explicado anteriormente.

### Facilitamos dos usuarios, un administrador y un usuario normal:

Administrador:
-username: manolo
-password: manolito25

Usuario normal:
-username:valdu
-password:1