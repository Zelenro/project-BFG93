import {
  loadsBooksFromCloud,
  saveBooksToCloud,
} from '../../api/firebase-service.js';
import { getWindowSize } from '../../helpers/get-window-size';

let arrBooksUser = [];
let currentPage = 1;
let itemsPerPage = 3;
let userId = null;

export function initItemsPerPage() {
  const { width } = getWindowSize();
  if (width < 768) {
    itemsPerPage = 4;
  } else {
    itemsPerPage = 3;
  }
}

export function setUserId(id) {
  userId = id;
}

export async function fetchBooks() {
  if (!userId) return [];

  arrBooksUser = await loadsBooksFromCloud(userId);
  return arrBooksUser;
}

export function getBooks() {
  return [...arrBooksUser];
}

export function hasBook(bookId) {
  return arrBooksUser.some(book => book._id === bookId);
}

export async function addBook(book) {
  if (hasBook(book._id)) return;

  arrBooksUser.push(book);
  await saveBooksToCloud(userId, arrBooksUser);
}

export async function removeBook(bookId) {
  arrBooksUser = arrBooksUser.filter(book => book._id !== bookId);
  await saveBooksToCloud(userId, arrBooksUser);
}

export function getCurrentPage() {
  return currentPage;
}

export function setCurrentPage(page) {
  currentPage = page;
}

export function getPaginatedBooks() {
  const startIndex = (currentPage - 1) * itemsPerPage;
  return arrBooksUser.slice(startIndex, startIndex + itemsPerPage);
}

export function getTotalPages() {
  return Math.ceil(arrBooksUser.length / itemsPerPage) || 1;
}
