import { activationCurrentLink } from '../../helpers/activation-current-link';
import { markupPopBooks } from './markup-pop-books';

export async function handleCategory(e) {
  const targetBtn = e.target.closest('.categories__link');
  if (!targetBtn) {
    return;
  }
  const categoryName = targetBtn.textContent.trim();

  activationCurrentLink(categoryName);
  await markupPopBooks(categoryName);
}
