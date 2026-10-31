import { getRefs } from '../../helpers/get-refs';
import { markupShoppingList } from './markup-shopping-list';
import { markupPaginationBlock } from './markup-pagination-block';
import { shoppingListDefault } from './shopping-list-deafault';
import {
  getBooks,
  getCurrentPage,
  getPaginatedBooks,
  getTotalPages,
  initItemsPerPage,
  removeBook,
  setCurrentPage,
} from './state-shopingList';

const refs = getRefs();

export async function refactorShoppingList() {
  initItemsPerPage();
  const allBooks = getBooks();
  if (allBooks.length === 0) {
    refs.shoppingListContainer.innerHTML = shoppingListDefault();
    if (refs.paginationBlock) refs.paginationBlock.innerHTML = '';
    return;
  }

  const totalPages = getTotalPages();
  if (getCurrentPage() > totalPages) {
    setCurrentPage(totalPages);
  }

  const booksToRender = getPaginatedBooks();
  refs.shoppingListContainer.innerHTML = markupShoppingList(booksToRender);
  renderPagination(totalPages);
  initShoppingListListeners();
}

function renderPagination(totalPages) {
  if (!refs.paginationBlock) return;

  if (totalPages <= 1) {
    refs.paginationBlock.innerHTML = '';
    refs.paginationBlock.classList.add('visually-hidden');
    return;
  }

  refs.paginationBlock.classList.remove('visually-hidden');
  markupPaginationBlock(refs.paginationBlock, getCurrentPage(), totalPages);
}

function initShoppingListListeners() {
  refs.shoppingListContainer.removeEventListener(
    'click',
    handleDeleteBookClick
  );
  refs.shoppingListContainer.addEventListener('click', handleDeleteBookClick);

  if (refs.paginationBlock) {
    refs.paginationBlock.removeEventListener('click', handlePaginationClick);
    refs.paginationBlock.addEventListener('click', handlePaginationClick);
  }
}

async function handleDeleteBookClick(e) {
  const deleteBtn = e.target.closest(`.js-delete-btn`);
  if (!deleteBtn) return;

  const bookId = deleteBtn.dataset.id;
  if (bookId) {
    await removeBook(bookId);
    refactorShoppingList();
  }
}

function handlePaginationClick(e) {
  const pageBtn = e.target.closest('.pagination__btn');

  if (!pageBtn || pageBtn.hasAttribute('disabled')) return;

  const action = pageBtn.dataset.page;
  const total = getTotalPages();
  const current = getCurrentPage();
  let targetPage = current;

  if (action === 'first') targetPage = 1;
  if (action === 'prev' && current > 1) targetPage = current - 1;
  if (action === 'next' && current < total) targetPage = current + 1;
  if (action === 'last') targetPage = total;

  if (targetPage !== current) {
    setCurrentPage(targetPage);
    refactorShoppingList();
  }
}
