import { booksApiService } from '../api/api-service';
import { addToShoppimgList } from './add-to-shopping-list';
import { markupModalTemplate } from './markup-modal-template';
import { stateModalBtnShopping } from './stateModalBtnShopping';
import { toggleModalBtnAddToShopingList } from './toggle-modal-btn-add-to-shoping-list';

const modal = document.querySelector('.modal');
let currentBook = null;

function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    onCloseModal();
  }
}

function onModalClick(e) {
  const isBackDrop = e.target === modal;
  const isAddBookToShoppingList = e.target.closest('.js-modal-btn');
  const isCloseBtn =
    e.target.closest('.modal__close-btn') ||
    e.target.closest('[data-modal-close]');
  if (isBackDrop || isCloseBtn) {
    onCloseModal();
    return;
  }
  if (isAddBookToShoppingList) {
    const isBookInList = addToShoppimgList(isAddBookToShoppingList.dataset.id);
    toggleModalBtnAddToShopingList(isBookInList);
  }
}

function onOpenModal(book) {
  modal.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');
  window.addEventListener('keydown', onEscKeyPress);
  modal.addEventListener('click', onModalClick);
  const isBookInList = stateModalBtnShopping(book._id);
  toggleModalBtnAddToShopingList(isBookInList);
}

function onCloseModal() {
  modal.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
  window.removeEventListener('keydown', onEscKeyPress);
  modal.removeEventListener('click', onModalClick);
  currentBook = null;
}

export async function openModal(e) {
  if (!e.target.classList.contains('js-book-image')) return;
  const id = e.target.dataset.id;
  const book = await booksApiService.byId(id);
  currentBook = book;

  const isBookInList = stateModalBtnShopping(book._id);
  const markup = markupModalTemplate(book, isBookInList);

  modal.innerHTML = '';
  modal.insertAdjacentHTML('beforeend', markup);

  onOpenModal(book);
}
