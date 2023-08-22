import axios from 'axios';
const KEY = '38888178-564cbbc9408e074f2fd24c446';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    Notify.failure('Something went wrong. Please try again later.');
    return Promise.reject(error);
  }
);

async function fetchImages(query, page, perPage) {
  const response = await axios.get(
    `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
  return response.data;
}

export { fetchImages };
