import { booksApiService } from '../../api/api-service';
import { bookCardTemplate } from './book-card-template';
import { categoryBlockTemplate } from './category-block-template';
import { renderTitleWithLastWord } from '../../helpers/render-title';
import { getRefs } from '../../helpers/get-refs';

function booksCount() {
  const width = window.innerWidth;
  if (width >= 1439) return 5;
  if (width >= 767) return 3;
  return 1;
}

export async function markupPopBooks(category) {
  const refs = getRefs();

  if (!refs.booksList) {
    return;
  }
  if (!category || category === 'All Categories') {
    category = 'All Categories';
    refs.booksListTitle.innerHTML =
      renderTitleWithLastWord('Best Sellers Books');
    try {
      refs.booksList.innerHTML = '';
      const topBooks = await booksApiService.topBooks();
      const markup = topBooks
        .filter(({ list_name, books }) => {
          return list_name !== '' && books && books.length > 0;
        })
        .map(({ list_name, books }) => {
          const limitedBooks = books.slice(0, booksCount());
          const markup = limitedBooks
            .map(({ book_image, title, author, _id }) => {
              return bookCardTemplate(book_image, title, author, _id);
            })
            .join('');
          return categoryBlockTemplate(list_name, markup);
        })
        .join('');
      refs.booksList.insertAdjacentHTML('beforeend', markup);
    } catch (error) {
    } finally {
    }
    return;
  } else {
    try {
      refs.booksList.innerHTML = '';
      const categoryBooks = await booksApiService.certainCategory(category);
      if (categoryBooks.length === 0) {
        return;
      }
      const limitedBooks = categoryBooks;
      const markup = limitedBooks
        .map(({ book_image, title, author, _id }) => {
          return bookCardTemplate(book_image, title, author, _id);
        })
        .join('');

      refs.booksListTitle.textContent = category;
      refs.booksListTitle.innerHTML = renderTitleWithLastWord(category);
      refs.booksList.insertAdjacentHTML('beforeend', markup);
    } catch (error) {}
  }
}
