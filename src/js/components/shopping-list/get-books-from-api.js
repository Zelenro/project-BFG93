import { booksApiService } from '../../api/api-service';

export async function getBooksFromApi(arrIdBooks) {
  const promisesBooks = arrIdBooks.map(async id => {
    const book = await booksApiService.byId(id);
    return book;
  });
  const books = await Promise.all(promisesBooks);
  return books;
}
