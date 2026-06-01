import { markupCardBooks } from './markup-card-book';

export function markupShoppingList(arrayBooks, user) {
  const markup = arrayBooks
    .map(book => {
      return markupCardBooks(book, user);
    })
    .join('');
  return markup;
}
