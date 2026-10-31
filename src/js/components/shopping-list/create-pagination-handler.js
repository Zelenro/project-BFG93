import { pagination } from './pagination';
import { handelShoppingList } from './handel-shopping-list';
import { getRefs } from '../../helpers/get-refs';

export function createPaginationHandler(stateObj) {
  const refs = getRefs();

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
      refs.shoppingListRef,
      handelShoppingList
    );
  };
}
