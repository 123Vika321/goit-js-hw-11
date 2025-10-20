import './css/reset.css';
import './css/base.css';
import 'izitoast/dist/css/iziToast.min.css';
import './css/styles.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';

const form = document.getElementById('search-form');
const input = document.getElementById('search-input');

form.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  const query = input.value.trim();

  if (!query) {
    iziToast.error({ title: 'Error', message: 'Please enter a search term.' });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (!data || !Array.isArray(data.hits) || data.hits.length === 0) {
        iziToast.info({
          title: 'No results',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      createGallery(data.hits);
    })
    .catch(err => {
      console.error(err);
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
      });
    })
    .finally(() => {
      hideLoader();
    });
}
