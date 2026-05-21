import { booksApiService } from '../api/api-service';
import { bookCardTemplate } from './book-card-template';
import { categoryBlockTemplate } from './home/category-block-template';
import { renderTitleWithLastWord } from './render-title';

function booksCount() {
  const width = window.innerWidth;
  if (width >= 1439) return 5;
  if (width >= 767) return 3;
  return 1;
}

export async function markupPopBooks(category) {
  const booksList = document.querySelector('.books__list');
  const booksListTitle = document.querySelector('.books__list__title');

  if (!booksList) {
    return;
  }

  if (!category || category === 'All Categories') {
    category = 'All Categories';
    booksListTitle.innerHTML = renderTitleWithLastWord('Best Sellers Books');

    try {
      booksList.innerHTML = '';
      const topBooks = await booksApiService.topBooks();
      const markup = topBooks
        .filter(({ list_name, books }) => {
          return list_name !== '' && books && books.length > 0;
        })
        .map(({ list_name, books }) => {
          const limitedBooks = books.slice(0, booksCount());

          const markup = limitedBooks
            .map(({ book_image, title, author }) => {
              const card = bookCardTemplate(book_image, title, author);
              return card;
            })
            .join('');
          return categoryBlockTemplate(list_name, markup);
        })
        .join('');
      booksList.insertAdjacentHTML('beforeend', markup);
    } catch (error) {
      console.log('Error markPopBooks Top Books', error);
    } finally {
    }
    return;
  } else {
    try {
      booksList.innerHTML = '';
      const categoryBooks = await booksApiService.certainCategory(category);
      if (categoryBooks.length === 0) {
        console.log('ADD BLOCK not Found');
        return;
      }
      const limitedBooks = categoryBooks;
      const markup = limitedBooks
        .map(({ book_image, title, author }) => {
          return bookCardTemplate(book_image, title, author);
        })
        .join('');

      booksListTitle.textContent = category;
      booksListTitle.innerHTML = renderTitleWithLastWord(category);
      booksList.insertAdjacentHTML('beforeend', markup);
    } catch (error) {
      console.log('Error markPopBooks Certain Category', error);
    }
  }
}
