import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");
const imageMarkup = createGalleryImage(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", imageMarkup);

function createGalleryImage(items) {
  return galleryItems
    .map((item) => {
      return `<li class="gallery__item">
          <a class="gallery__link" href="${item.original}">
            <img
              class="gallery__image"
              src="${item.preview}"
              data-source="${item.original}"
              alt="${item.description}"
            />
          </a>
        </li>`;
    })
    .join("");
}
console.log(galleryEl);
//
createGalleryImage();
console.log(createGalleryImage());
