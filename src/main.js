import { headerJS } from './js/components/header/header';
import { activationCurrentLink } from './js/helpers/activation-current-link';
import { homePage } from './js/components/home/home';
import { markupPopBooks } from './js/components/home/markup-pop-books';
// import { shoppigList } from './js/components/shopping-list/de-shopping-list';
import { markupCharitableFundations } from './js/helpers/charitable-foundations';
import { refactorShoppingList } from './js/components/shopping-list/refactor-shopping-list';

document.addEventListener('DOMContentLoaded', async () => {
  const home = document.querySelector('.js-home');
  const shoppingList = document.querySelector('.js-shoppig-list');
  headerJS();
  activationCurrentLink();

  if (home) {
    homePage();
    const booksList = document.querySelector('.books__list');
    if (booksList) {
      booksList.addEventListener('click', async e => {
        const targetBtn = e.target.closest('.book__btn');
        if (!targetBtn) return;
        const categoryName = targetBtn.dataset.category;
        activationCurrentLink(categoryName);
        await markupPopBooks(categoryName);
      });
    }
  } else if (shoppingList) {
    // shoppigList('Stefan');
    markupCharitableFundations();
    refactorShoppingList('Stefan');
  }
});
