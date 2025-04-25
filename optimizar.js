const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputFolder = './assets/imagen/';
const outputFolder = './assets/optimizadas/';
const tamaños = [320, 520, 1000]; // puedes cambiarlos según lo necesites

if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true });
}

fs.readdirSync(inputFolder).forEach(file => {
    const ext = path.extname(file).toLowerCase();
    const baseName = path.basename(file, ext);

    if (ext === '.jpg' || ext === '.png') {
        tamaños.forEach(tamaño => {
            const inputPath = path.join(inputFolder, file);
            const outputPath = path.join(outputFolder, `${baseName}-${tamaño}.webp`);

            sharp(inputPath)
                .resize({ width: tamaño })
                .webp({ quality: 80 })
                .toFile(outputPath)
                .then(() => console.log(`✅ ${file} → ${baseName}-${tamaño}.webp`))
                .catch(err => console.error(`❌ Error con ${file}:`, err));
        });
    }
});
