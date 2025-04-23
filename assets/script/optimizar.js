// optimizador.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagenes = ['corea.jpg', 'japchae.jpg', 'kimchi.jpg', 'kimbap.jpg'];
const tamaños = [480, 800, 1200];
const carpetaOrigen = 'assets/imagen';
const carpetaDestino = 'assets/optimizadas';

imagenes.forEach(imagen => {
  const nombreBase = path.parse(imagen).name;
  tamaños.forEach(tamaño => {
    sharp(`${carpetaOrigen}/${imagen}`)
      .resize(tamaño)
      .toFile(`${carpetaDestino}/${nombreBase}-${tamaño}.jpg`)
      .then(() => console.log(`✅ ${nombreBase}-${tamaño}.jpg generado`))
      .catch(err => console.error(`❌ Error con ${imagen}:`, err));
  });
});
