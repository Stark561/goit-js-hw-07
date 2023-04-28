import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
const createGalleryItemMarkup = ({ preview, original, description }) => {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
      </a>
    </li>`;
};
const galleryMarkup = galleryItems.map(createGalleryItemMarkup).join('');
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
galleryList.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const originalImgUrl = event.target.dataset.source;
  const description = event.target.alt;

  const instance = basicLightbox.create(`
    <img src="${originalImgUrl}" alt="${description}" width="800" height="600">`);
  instance.show();
}







// let modal;
// function omModalEscapeClose(event){
//   if (event.code !== "Escape") return;
//   modal.close();
// }

// galleryist.addEventListener("click", (event) => {
//   if (event.target.nodeName !== "IMG") return;
//   const largeImageSrc = event.target.dataset.source;
//   event.prevenDefault();
//   const options = {
//     onShow: (instance) => {
//       document.addEventListener("keydown", onModalEscapeClose);
//     },
//     onClose: (instance) => {
//       document.removeEventListener("keydown", onModalEscapeClose);
//     },
//   };

//   modal= basicLightbox.create(
//     `<img src = "${largeImageSrc}" alt="" />`,
//     options
//   );
//   modal.show();