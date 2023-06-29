import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

const createGalleryMarkup = (items) => {
  return items
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>
      `;
    })
    .join('');
};

galleryList.innerHTML = createGalleryMarkup(galleryItems);

galleryList.addEventListener('click', (event) => {
  event.preventDefault();

  const clickedElement = event.target;

  if (clickedElement.nodeName === 'IMG') {
    return;
  }

  const source = clickedElement.dataset.source;

  const modal = basicLightbox.create(`
    <img src="${source}" alt="" />
  `);

  modal.show();

  window.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      modal.close();
    }
  });
});

console.log(galleryItems);