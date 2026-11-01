import { booksApiService } from '../api/api-service';
import { getRefs } from './get-refs';

export async function markupListCategoryBooks() {
  const refs = getRefs();

  const allCategories = `<li class="categories__item">
          <button class="categories__link is-active" type="button">All Categories</button>
        </li>`;

  if (!refs.categoriesList) {
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
    refs.categoriesList.innerHTML = '';
    refs.categoriesList.insertAdjacentHTML('afterbegin', allCategories);
    refs.categoriesList.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.error('Error categories list', error);
  }
}
