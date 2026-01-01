
// Імпортуємо дані про альбоми з нашого "пульта керування"
import allAlbums from './gallery-data.js';

document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.querySelector('.gallery-grid');
    const galleryControls = document.querySelector('.gallery-controls');

    // Якщо на сторінці немає контейнера для галереї, нічого не робимо.
    if (!galleryGrid) {
        console.error('Не знайдено контейнер .gallery-grid!');
        return;
    }

    // Функція для відображення альбомів на сторінці
    const renderAlbums = (albumsToRender) => {
        galleryGrid.innerHTML = ''; // Спочатку очищуємо галерею

        if (!albumsToRender || albumsToRender.length === 0) {
            galleryGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 50px 20px; color: var(--text-light);">
                    <i class="fas fa-images" style="font-size: 50px; margin-bottom: 20px; opacity: 0.7;"></i>
                    <h3>Альбоми скоро з'являться</h3>
                    <p>Наразі в цій категорії немає альбомів, але ми працюємо над цим.</p>
                </div>
            `;
            return;
        }

        albumsToRender.forEach(album => {
            const albumElement = document.createElement('div');
            albumElement.className = 'gallery-item';
            albumElement.setAttribute('data-category', album.category);
            albumElement.setAttribute('data-album-id', album.id);

            albumElement.innerHTML = `
                <img src="${album.cover}" alt="${album.title}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1516549655669-df565bc5d4e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80';">
                <div class="album-title">
                    ${album.title}
                </div>
            `;
            galleryGrid.appendChild(albumElement);
        });
    };

    // Функція для налаштування кнопок-фільтрів
    const setupFiltering = () => {
        if (!galleryControls) return;

        const filterButtons = galleryControls.querySelectorAll('.gallery-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Оновлюємо активну кнопку
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filter = button.getAttribute('data-filter');

                if (filter === 'all') {
                    renderAlbums(allAlbums);
                } else {
                    const filteredAlbums = allAlbums.filter(album => album.category === filter);
                    renderAlbums(filteredAlbums);
                }
            });
        });
    };

    // Початкове відображення всіх альбомів та налаштування фільтрів
    renderAlbums(allAlbums);
    setupFiltering();
});
