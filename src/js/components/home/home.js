import { handleCategory } from './handle-category';
import { markupCharitableFundations } from '../../helpers/charitable-foundations';
import { markupListCategoryBooks } from '../../helpers/all-categories-books';
import { markupPopBooks } from './markup-pop-books';
import { openModal } from '../modal/modal';

const categoriesList = document.querySelector('.categories__list');
const booksList = document.querySelector('.books__list');

if (categoriesList) {
  categoriesList.addEventListener('click', handleCategory);
}

if (booksList) {
  booksList.addEventListener('click', openModal);
}

export async function homePage() {
  await Promise.all([
    markupListCategoryBooks(),
    markupCharitableFundations(),
    markupPopBooks('All Categories'),
  ]);
}
