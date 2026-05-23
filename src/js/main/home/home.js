import { handleCategory } from './handle-category';
import { markupCharitableFundations } from '../charitable-foundations';
import { markupListCategoryBooks } from '../all-categories-books';
import { markupPopBooks } from '../markup-pop-books';
import { openModal } from '../modal';

const categoriesList = document.querySelector('.categories__list');
const booksList = document.querySelector('.books__list');

if (categoriesList) {
  categoriesList.addEventListener('click', handleCategory);
}

booksList.addEventListener('click', openModal);

export async function homePage() {
  await Promise.all([
    markupListCategoryBooks(),
    markupCharitableFundations(),
    markupPopBooks('All Categories'),
  ]);
}
