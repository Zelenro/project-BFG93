import { booksApiService } from '../../api/api-service';
import { getRefs } from '../../helpers/get-refs';

export async function backgroundListBookRender() {
  const refs = getRefs();

  if (!refs.backgroundListBook || refs.backgroundListBook.children.length > 0)
    return;

  try {
    const topBooks = await booksApiService.topBooks();

    const markup = topBooks
      .filter(({ list_name, books }) => {
        return list_name !== '' && books && books.length > 0;
      })
      .slice(0, 12)
      .map(({ books }) => {
        const firstBook = books[0];
        if (!firstBook) return '';
        return /*html*/ `<li class="menu-background-item"><img src="${firstBook.book_image}" alt="${firstBook.title}" class="menu-img-background" loading="lazy"/></li>`;
      })
      .join('');

    refs.backgroundListBook.innerHTML = markup;

    const items = refs.backgroundListBook.querySelectorAll(
      '.menu-background-item'
    );

    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('is-visible');
      }, index * 40);
    });
  } catch (error) {
    console.error('Error render books to background:', error);
  } finally {
  }
}
