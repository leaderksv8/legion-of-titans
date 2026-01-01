
/*
================================================================================
/!\ ВАШ ПУЛЬТ КЕРУВАННЯ ГАЛЕРЕЄЮ /!\
================================================================================

Це єдиний файл, який вам потрібно редагувати, щоб додавати,
видаляти або змінювати альбоми та фотографії в галереї.

ЩОБ ДОДАТИ НОВИЙ АЛЬБОМ:
1.  Скопіюйте весь блок, починаючи з { і закінчуючи },
2.  Вставте його після існуючого альбому (не забудьте про кому , між ними).
3.  Змініть дані:
    - id: Унікальна назва латиницею (наприклад, 'zustrich-z-prezydentom').
    - title: Назва альбому, яка буде відображатися на сайті (наприклад, 'Зустріч з Президентом').
    - category: Категорія для фільтрів. Може бути:
        - 'rehabilitation' (Реабілітація)
        - 'legal' (Юридична допомога)
        - 'leisure' (Дозвілля)
        - 'training' (Навчання)
        - 'events' (Інші події)
    - cover: Шлях до головної фотографії альбому (обкладинки).
    - photos: Список шляхів до всіх фотографій цього альбому.

ВАЖЛИВО:
-   Всі шляхи до фотографій починаються з 'gallery/НАЗВА_ВАШОЇ_ПАПКИ/'.
-   Не видаляйте "const allAlbums = [...]" та "export default allAlbums;".
-   Слідкуйте за комами між блоками {} та між шляхами до фотографій.

*/

const allAlbums = [
  {
    id: 'reabilitaciya-2024',
    title: 'Реабілітація 2024',
    category: 'rehabilitation',
    cover: 'gallery/reabilitaciya-2024/photo001.jpg',
    photos: [
      'gallery/reabilitaciya-2024/photo001.jpg',
      'gallery/reabilitaciya-2024/photo002.jpg',
      'gallery/reabilitaciya-2024/photo003.jpg',
      'gallery/reabilitaciya-2024/photo004.jpg',
      'gallery/reabilitaciya-2024/photo005.jpg'
    ]
  },
  {
    id: 'zustrich-z-veteranamy',
    title: 'Зустріч з ветеранами',
    category: 'leisure',
    cover: 'gallery/zustrich-z-veteranamy/photo007.jpg',
    photos: [
      'gallery/zustrich-z-veteranamy/photo007.jpg',
      'gallery/zustrich-z-veteranamy/photo008.jpg',
      'gallery/zustrich-z-veteranamy/photo009.jpg',
      'gallery/zustrich-z-veteranamy/photo0010.jpg',
      'gallery/zustrich-z-veteranamy/photo0011.jpg',
      'gallery/zustrich-z-veteranamy/photo0012.jpg'
    ]
  }
];

export default allAlbums;
