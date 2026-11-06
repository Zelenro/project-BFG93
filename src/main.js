import './js/components/auth/auth-modal';

import { headerJS } from './js/components/header/header';
import { activationCurrentLink } from './js/helpers/activation-current-link';
import { homePage } from './js/components/home/home';
import { markupCharitableFundations } from './js/helpers/charitable-foundations';
import { refactorShoppingList } from './js/components/shopping-list/refactor-shopping-list';
import { getRefs } from './js/helpers/get-refs';
import { handleCategoryClick } from './js/helpers/handle-category-click';
import {
  fetchBooks,
  setUserId,
} from './js/components/shopping-list/state-shopingList';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './js/api/firebase-service';

document.addEventListener('DOMContentLoaded', () => {
  const refs = getRefs();
  if (!refs) return;

  onAuthStateChanged(auth, async user => {
    const userName = user ? user.displayName : null;
    const userId = user ? user.uid : null;

    refs.pageLoader?.classList.remove('is-hidden');

    try {
      if (user) {
        setUserId(userId);
        await fetchBooks();
        if (refs.navHomeLink) refs.navHomeLink.classList.remove('is-hidden');
        if (refs.navShoppingLink)
          refs.navShoppingLink.classList.remove('is-hidden');
      } else {
        setUserId(null);

        if (refs.navHomeLink) refs.navHomeLink.classList.add('is-hidden');
        if (refs.navShoppingLink)
          refs.navShoppingLink.classList.add('is-hidden');
        if (refs.menu?.classList.contains('is-open')) {
          refs.menu.classList.remove('is-open');
        }

        if (refs.shoppingListPage) {
          window.location.href = './index.html';
          return;
        }
      }

      headerJS(userName);
      activationCurrentLink(userName);

      if (refs.homePage) {
        homePage(userName);

        if (refs.booksList) {
          refs.booksList.removeEventListener('click', handleCategoryClick);
          refs.booksList.addEventListener('click', handleCategoryClick);
        }
      } else if (refs.shoppingListPage && user) {
        await markupCharitableFundations(userName);
        await refactorShoppingList(userName);
      }
    } catch (error) {
      console.error('Ошибка при загрузке данных приложения:', error);
    } finally {
      refs.pageLoader?.classList.add('is-hidden');
    }
  });
});
