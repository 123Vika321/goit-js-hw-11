import axios from 'axios';

const API_KEY = '52850733-d97c0fbc64eee6c455900e64a';

const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data)
    .catch(error => {
      console.error('Pixabay API error:', error);
      throw error;
    });
}
