const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, '../gallery');
const dbPath = path.join(__dirname, '../js/db.js');

const supportedImageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
const supportedVideoExtensions = ['.mp4', '.webm', '.ogg'];

function buildGalleryDatabase() {
    console.log('Scanning gallery directory...');
    const albums = [];

    fs.readdirSync(galleryDir).forEach(albumName => {
        const albumPath = path.join(galleryDir, albumName);
        if (fs.statSync(albumPath).isDirectory()) {
            console.log(`Found album: ${albumName}`);
            const media = [];
            fs.readdirSync(albumPath).forEach(fileName => {
                const fileExtension = path.extname(fileName).toLowerCase();
                const filePath = `gallery/${albumName}/${fileName}`;

                if (supportedImageExtensions.includes(fileExtension)) {
                    media.push({ type: 'image', src: filePath });
                } else if (supportedVideoExtensions.includes(fileExtension)) {
                    media.push({ type: 'video', src: filePath });
                }
            });

            if (media.length > 0) {
                albums.push({
                    id: albumName.replace(/\s+/g, '-').toLowerCase(),
                    title: albumName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
                    media: media
                });
            }
        }
    });

    const dbContent = `const galleryDatabase = ${JSON.stringify(albums, null, 2)};`;
    fs.writeFileSync(dbPath, dbContent);
    console.log('Gallery database created successfully!');
}

buildGalleryDatabase();
