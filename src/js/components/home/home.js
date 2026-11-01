import { handleCategory } from './handle-category';
import { markupCharitableFundations } from '../../helpers/charitable-foundations';
import { markupListCategoryBooks } from '../../helpers/all-categories-books';
import { markupPopBooks } from './markup-pop-books';
import { openModal } from '../modal/modal';
import { getRefs } from '../../helpers/get-refs';

const refs = getRefs();

if (refs.categoriesList) {
  refs.categoriesList.addEventListener('click', handleCategory);
}

if (refs.booksList) {
  refs.booksList.addEventListener('click', openModal);
}

export async function homePage() {
  await Promise.all([
    markupListCategoryBooks(),
    markupCharitableFundations(),
    markupPopBooks('All Categories'),
  ]);
}
