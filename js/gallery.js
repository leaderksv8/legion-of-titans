document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('gallery-container');

    if (galleryContainer && typeof galleryDatabase !== 'undefined') {
        if (galleryDatabase.length === 0) {
            galleryContainer.innerHTML = '<p>Наразі немає доступних альбомів.</p>';
            return;
        }

        galleryDatabase.forEach(album => {
            const albumElement = document.createElement('div');
            albumElement.classList.add('album');

            const albumTitle = document.createElement('h3');
            albumTitle.textContent = album.title;
            albumElement.appendChild(albumTitle);

            const mediaContainer = document.createElement('div');
            mediaContainer.classList.add('media-container');

            album.media.forEach(mediaItem => {
                if (mediaItem.type === 'image') {
                    const img = document.createElement('img');
                    img.src = mediaItem.src;
                    img.alt = album.title;
                    mediaContainer.appendChild(img);
                } else if (mediaItem.type === 'video') {
                    const video = document.createElement('video');
                    video.src = mediaItem.src;
                    video.controls = true;
                    mediaContainer.appendChild(video);
                }
            });

            albumElement.appendChild(mediaContainer);
            galleryContainer.appendChild(albumElement);
        });
    }
});
