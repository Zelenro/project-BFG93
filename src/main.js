import { headerJS } from './js/header';
import { booksApiService } from './js/api-books';

document.addEventListener('DOMContentLoaded', () => {
  headerJS();
});

booksApiService.getCategori().then(resp => console.log(resp));
