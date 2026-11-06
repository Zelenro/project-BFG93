import { company } from '../api/company';
import { getRefs } from './get-refs';

export async function markupCharitableFundations() {
  const refs = getRefs();

  if (!refs.listCharitableFoundation) {
    return;
  }

  try {
    const markup = company
      .map(({ title, url, img }, index) => {
        const padIndex = String(index + 1).padStart(2, '0');
        const isSpecialLogo = title === 'UNITED24' || title === 'World vision';
        const logoClass = isSpecialLogo
          ? 'foundations__logo foundations__logo--special'
          : 'foundations__logo';

        return `<li class="foundations__item">
          <span class="foundations__number">${padIndex}</span>
          <a class="foundations__link" href="${url}" target="_blank" rel="noopener noreferrer">
            <img class="${logoClass}" src="${img}" alt="${title}" loading="lazy">
          </a>
        </li>`;
      })
      .join('');
    refs.listCharitableFoundation.innerHTML = '';
    refs.listCharitableFoundation.insertAdjacentHTML('afterbegin', markup);

    if (refs.supportSliderBtn) {
      const scrollStep = 52;

      refs.supportSliderBtn.addEventListener('click', () => {
        const isEnd =
          refs.listCharitableFoundation.scrollTop +
            refs.listCharitableFoundation.clientHeight >=
          refs.listCharitableFoundation.scrollHeight - 5;

        if (isEnd) {
          refs.listCharitableFoundation.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        } else {
          refs.listCharitableFoundation.scrollBy({
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
