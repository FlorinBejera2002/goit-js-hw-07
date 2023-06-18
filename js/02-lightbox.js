import { galleryItems } from './gallery-items.js';

// Crearea și randarea markup-ului galeriei
const galleryList = document.querySelector('.gallery');

const createGalleryMarkup = (items) => {
  return items
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
        </li>
      `;
    })
    .join('');
};

galleryList.innerHTML = createGalleryMarkup(galleryItems);

// Inițializarea SimpleLightbox după crearea și adăugarea elementelor galeriei
const gallery = new SimpleLightbox('.gallery a', {
  captions: {
    captionDelay: 250,
    captionPosition: 'bottom',
  },
});

console.log(galleryItems);