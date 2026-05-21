import { company } from '../api/company';

export async function markupCharitableFundations() {
  const listCharitableFundation = document.querySelector('.foundations__list');
  const btn = document.querySelector('.support__slider-btn');
  if (!listCharitableFundation) {
    console.log('Charitable fundations not found!');
    return;
  }
  // TODO:jvdfjvnfdnv
  try {
    const markup = company
      .map(({ title, url, img }, index) => {
        const padIndex = String(index + 1).padStart(2, '0');
        return `<li class="foundations__item">
          <span class="foundations__number">${padIndex}</span>
          <a class="foundations__link" href="${url}" target="_blank" rel="noopener noreferrer">
            <img class="foundations__logo" src="${img}" alt="${title}" loading="lazy">
          </a>
        </li>`;
      })
      .join('');
    listCharitableFundation.innerHTML = '';
    listCharitableFundation.insertAdjacentHTML('afterbegin', markup);

    if (btn) {
      // скролл: высота строки (32px) + gap (20px) * 3 элемента = 156px
      const scrollStep = 52;

      btn.addEventListener('click', () => {
        const isEnd =
          listCharitableFundation.scrollTop +
            listCharitableFundation.clientHeight >=
          listCharitableFundation.scrollHeight - 5;

        if (isEnd) {
          listCharitableFundation.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        } else {
          listCharitableFundation.scrollBy({
            top: scrollStep,
            behavior: 'smooth',
          });
        }
      });
    }
  } catch (error) {
    console.error('Charitable fundations error:', error);
  } finally {
  }
}
