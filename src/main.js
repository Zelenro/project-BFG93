import { headerJS } from './js/header/header';
import { activationCurrentLink } from './js/main/activation-current-link';
import { homePage } from './js/main/home/home';
import { markupPopBooks } from './js/main/markup-pop-books';

document.addEventListener('DOMContentLoaded', () => {
  headerJS();
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
});
