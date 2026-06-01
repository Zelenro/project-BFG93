import { booksApiService } from '../api/api-service';

export async function markupListCategoryBooks() {
  const listTopBooks = document.querySelector('.categories__list');
  const allCategories = `<li class="categories__item">
          <button class="categories__link is-active" type="button">All Categories</button>
        </li>`;

  if (!listTopBooks) {
    return;
  }
  try {
    const response = await booksApiService.getCategories();
    const markup = response
      .filter(({ list_name }) => list_name)
      .map(({ list_name }) => {
        return `<li class="categories__item">
        <button class="categories__link" type='button'>${list_name}</button>         
        </li>`;
      })
      .join('');
    listTopBooks.innerHTML = '';
    listTopBooks.insertAdjacentHTML('afterbegin', allCategories);
    listTopBooks.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.error('Error categories list', error);
  }
}
