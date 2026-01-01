
document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.querySelector('.gallery-albums');

    if (galleryContainer) {
        // Clear any old content
        galleryContainer.innerHTML = '';

        // Check if galleryData is available
        if (typeof galleryData !== 'undefined' && galleryData.length > 0) {
            galleryData.forEach(album => {
                const albumElement = document.createElement('div');
                albumElement.className = 'album';

                albumElement.innerHTML = `
                    <a href="#" class="album-link" data-album-id="${album.id}">
                        <img src="${album.cover}" alt="${album.title}" class="album-cover">
                        <div class="album-title">${album.title}</div>
                    </a>
                `;

                galleryContainer.appendChild(albumElement);
            });
        } else {
            galleryContainer.innerHTML = '<p>Наразі фотоальбомів немає.</p>';
        }
    }

    // Handle clicking on an album to show photos (simplified)
    // This part will be expanded or placed in a different script if needed
    // For now, it just prevents the default link behavior
    galleryContainer.addEventListener('click', (e) => {
        if (e.target.closest('.album-link')) {
            e.preventDefault();
            const albumId = e.target.closest('.album-link').dataset.albumId;
            // We would load the photos for this albumId here
            // For example: window.location.href = `album.html?id=${albumId}`;
            alert(`Тут будуть фотографії для альбому: ${albumId}`);
        }
    });
});
