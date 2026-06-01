import { getBooksFromApi } from './get-books-from-api';
import { handelShoppingList } from './handel-shopping-list';
import { markupPaginationBlock } from './markup-pagination-block';
import { markupShoppingList } from './markup-shopping-list';

export async function pagination(
  e,
  stateObj,
  totalPages,
  paginationBlock,
  shoppingListRef,
  handelShoppingList
) {
  let startIndex = (stateObj.currentPage - 1) * stateObj.itemsPerPage;
  let endIndex = startIndex + stateObj.itemsPerPage;

  if (e) {
    const btn = e.target.dataset.page;

    if (btn === 'next' && stateObj.currentPage < totalPages) {
      stateObj.currentPage += 1;
    }

    if (btn === 'prev' && stateObj.currentPage > 1) {
      stateObj.currentPage -= 1;
    }

    if (btn === 'last') {
      stateObj.currentPage = totalPages;
    }
    if (btn === 'first') {
      stateObj.currentPage = 1;
    }
    startIndex = (stateObj.currentPage - 1) * stateObj.itemsPerPage;
    endIndex = startIndex + stateObj.itemsPerPage;
  }

  const booksToApi = stateObj.arrBooksUser.slice(startIndex, endIndex);

  const booksToRender = await getBooksFromApi(booksToApi);

  const htmlMarkup = markupShoppingList(booksToRender, stateObj.userName);
  shoppingListRef.innerHTML = '';
  shoppingListRef.insertAdjacentHTML('beforeend', htmlMarkup);
  shoppingListRef.removeEventListener('click', handelShoppingList);
  shoppingListRef.addEventListener('click', handelShoppingList);
  if (stateObj.itemsPerPage >= stateObj.arrBooksUser.length) {
    if (paginationBlock) {
      paginationBlock.innerHTML = '';
    }
  } else {
    markupPaginationBlock(paginationBlock, stateObj.currentPage, totalPages);
  }
}
