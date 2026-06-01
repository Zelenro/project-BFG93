import { pagination } from './pagination';
import { handelShoppingList } from './handel-shopping-list';

const shoppingListRef = document.querySelector('#dynamic-book-list');

export function createPaginationHandler(stateObj) {
  return function handlePagination(e) {
    const btn = e.target.dataset.page;
    if (!btn) return;
    const currentPaginationBlock = e.currentTarget;
    const totalPages = Math.ceil(
      stateObj.arrBooksUser.length / stateObj.itemsPerPage
    );
    pagination(
      e,
      stateObj,
      totalPages,
      currentPaginationBlock,
      shoppingListRef,
      handelShoppingList
    );
  };
}
