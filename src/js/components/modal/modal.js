import { booksApiService } from '../../api/api-service';
import { getRefs } from '../../helpers/get-refs';
import { markupModalTemplate } from './markup-modal-template';
import {
  hasBook,
  addBook,
  removeBook,
} from '../shopping-list/state-shopingList.js';
import { auth } from '../../api/firebase-service.js';

const refs = getRefs();
let currentBook = null;

function onModalClick(e) {
  const isBackDrop = e.target === refs.bookModal;
  const isCloseBtn =
    e.target.closest('.modal__close-btn') ||
    e.target.closest('[data-modal-close]');
  const isActionBtn = e.target.closest('.js-modal-btn');

  if (isBackDrop || isCloseBtn) {
    onCloseModal();
    return;
  }

  if (isActionBtn) {
    handleModalAction();
  }
}

async function handleModalAction() {
  if (!auth.currentUser) return;

  if (!currentBook) return;

  const bookId = currentBook._id;
  const isBookInList = hasBook(bookId);
  if (isBookInList) {
    await removeBook(bookId);
  } else {
    await addBook(currentBook);
  }

  toggleModalBtnState(!isBookInList);
}

function toggleModalBtnState(isBookInList) {
  const actionBtn = refs.bookModal.querySelector('.js-modal-btn');
  const subText = refs.bookModal.querySelector('.js-modal-notification');

  if (!actionBtn) return;

  if (isBookInList) {
    if (actionBtn) actionBtn.textContent = 'Remove from shopping list';
    if (subText) subText.style.display = 'block';
  } else {
    if (actionBtn) actionBtn.textContent = 'Add to shopping list';
    if (subText) subText.style.display = 'none';
  }
}

function onOpenModal() {
  refs.bookModal.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');
  window.addEventListener('keydown', onEscKeyPress);
  refs.bookModal.addEventListener('click', onModalClick);
  document.body.style.overflow = 'hidden';
}

function onCloseModal() {
  refs.bookModal.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
  window.removeEventListener('keydown', onEscKeyPress);
  refs.bookModal.removeEventListener('click', onModalClick);
  currentBook = null;
  document.body.style.overflow = '';
}

function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    onCloseModal();
  }
}

export async function openModal(e) {
  if (!e.target.classList.contains('js-book-image')) return;

  try {
    const id = e.target.dataset.id;
    const book = await booksApiService.byId(id);
    currentBook = book;

    const isLoggedIn = Boolean(auth.currentUser);
    const isBookInList = hasBook(book._id);
    const markup = markupModalTemplate(book, isBookInList, isLoggedIn);

    refs.bookModal.innerHTML = '';
    refs.bookModal.insertAdjacentHTML('beforeend', markup);

    onOpenModal();
  } catch (error) {
    console.error('Ошибка при открытии модалки книги:', error);
  }
}
