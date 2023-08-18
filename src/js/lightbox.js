import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = new SimpleLightbox('.photo-card', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

export { lightbox };
