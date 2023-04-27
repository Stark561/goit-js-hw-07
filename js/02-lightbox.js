import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
let markup = galleruItems.map(({ preview, original, description}) => {
  console.log(original);
  return `<li class="gallery__item">
    <a class="galary__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  </li>`;
}).join('');
galleryList.insertAdjacentHTML('beforeend', markup);

var lightbox = new SimpleLightbox('.gallery', {
  animation: 'fadeIn',
  noScrollbars: true,
  buttons: false,
});



