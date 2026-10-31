import { markupCardBooks } from './markup-card-book';

export function markupShoppingList(booksArray) {
  if (!booksArray || booksArray.length === 0) return '';
  return booksArray.map(book => markupCardBooks(book)).join('');
}
