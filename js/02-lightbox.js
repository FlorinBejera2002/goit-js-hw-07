`use strict`

import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryElement = document.querySelector(".gallery");

// Crearea si randarea unui markup

function createGallery() {
  const galleryMarkup = galleryItems
    .map(
      (item) => `
         <li class="gallery__item">
          <a class="gallery__link" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
          </a>
        </li>
      `
    )
    .join("");
  galleryElement.insertAdjacentHTML("afterbegin", galleryMarkup);
}

createGallery();


const simpleLightbox = new SimpleLightbox(".gallery a", {
captionsData: "alt",
captionDelay: 250,
});

