const Service = require('node-windows').Service;
const fs = require('fs');
const path = require('path');

// Rutas de las carpetas de origen y destino
const origen = 'C:\\EdoCtaBBVA\\Entrada\\Leidos';
const destino = 'C:\\EdoCtaBBVA\\Entrada\\Leidos\\Antes';

// Crear un nuevo objeto de servicio
const svc = new Service({
  name: 'FileMoveService',
  description: 'Servicio que mueve archivos de una carpeta a otra',
  script: __filename // Usa __filename para referenciar el archivo actual
});

// Función para mover archivos
function moveFiles() {
  fs.readdir(origen, (err, files) => {
    if (err) {
      console.error('Error al leer la carpeta de origen:', err);
      return;
    }

    files.forEach(file => {
      const origenPath = path.join(origen, file);
      const destinoPath = path.join(destino, file);

      fs.rename(origenPath, destinoPath, err => {
        if (err) {
          console.error(`Error al mover ${file}:`, err);
        } else {
          console.log(`${file} movido exitosamente.`);
        }
      });
    });
  });
}

// Escuchar eventos
svc.on('install', () => {
  console.log('Instalando servicio...');
  moveFiles();
  svc.start();
});

svc.on('start', () => {
  console.log('Iniciando servicio...');
  setInterval(moveFiles, 604800000); // Mover archivos cada semana
});

// Instalar el servicio
svc.install();