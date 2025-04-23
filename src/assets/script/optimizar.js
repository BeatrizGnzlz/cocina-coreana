const sharp = require('sharp');

// =================== JAPCHAE ===================
sharp('japchae.jpg')
  .resize(480)
  .toFormat('webp')
  .toFile('images/japchae-small.webp');

sharp('japchae.jpg')
  .resize(768)
  .toFormat('webp')
  .toFile('images/japchae-medium.webp');

sharp('japchae.jpg')
  .resize(1200)
  .toFormat('webp')
  .toFile('images/japchae-large.webp');

// =================== KIMCHI ===================
sharp('kimchi.jpg')
  .resize(480)
  .toFormat('webp')
  .toFile('images/kimchi-small.webp');

sharp('kimchi.jpg')
  .resize(768)
  .toFormat('webp')
  .toFile('images/kimchi-medium.webp');

sharp('kimchi.jpg')
  .resize(1200)
  .toFormat('webp')
  .toFile('images/kimchi-large.webp');

// =================== KIMBAP ===================
sharp('kimbap.jpg')
  .resize(480)
  .toFormat('webp')
  .toFile('images/kimbap-small.webp');

sharp('kimbap.jpg')
  .resize(768)
  .toFormat('webp')
  .toFile('images/kimbap-medium.webp');

sharp('kimbap.jpg')
  .resize(1200)
  .toFormat('webp')
  .toFile('images/kimbap-large.webp');

