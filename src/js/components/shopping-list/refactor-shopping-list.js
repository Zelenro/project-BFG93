import { getWindowSize } from '../../helpers/getWindowSize';
import { createPaginationHandler } from './create-pagination-handler';
import { getItemsFromLocalStorage } from './get-items-from-local-storage';
import { handelShoppingList } from './handel-shopping-list';
import { pagination } from './pagination';
import { shoppingListDefault } from './shopping-list-deafault';
import { state } from './state-shopingList';

const shoppingListRef = document.querySelector('#dynamic-book-list');
const paginationBlock = document.querySelector('.js-pagination');

const handlePaginationClick = createPaginationHandler(state);

export async function refactorShoppingList(user = 'Stefan') {
  if (!user) return state.arrBooksUser;
  state.userName = user;
  const { width, height } = getWindowSize();
  if (width < 768) state.itemsPerPage = 4;

  state.arrBooksUser = await getItemsFromLocalStorage(state.userName);

  if (state.arrBooksUser.length === 0 || !state.arrBooksUser) {
    shoppingListRef.innerHTML = shoppingListDefault();
    if (paginationBlock) {
      paginationBlock.innerHTML = '';
    }
    return;
  }
  const totalPages = Math.ceil(state.arrBooksUser.length / state.itemsPerPage);
  if (state.currentPage > totalPages && totalPages > 0) {
    state.currentPage = totalPages;
  }

  pagination(
    null,
    state,
    totalPages,
    paginationBlock,
    shoppingListRef,
    handelShoppingList
  );

  paginationBlock.removeEventListener('click', handlePaginationClick);
  paginationBlock.addEventListener('click', handlePaginationClick);
}
