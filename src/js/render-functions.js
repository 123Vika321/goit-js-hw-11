import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images) {
  const markup = images
    .map(
      img => `<li>
        <a href="${img.largeImageURL}">
          <img src="${img.webformatURL}" alt="${img.tags}" />
        </a>
        <p>Likes: ${img.likes} Views: ${img.views}</p>
      </li>`
    )
    .join('');
  galleryContainer.innerHTML = markup;
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  document.getElementById('loader').classList.remove('hidden');
}

export function hideLoader() {
  document.getElementById('loader').classList.add('hidden');
}
