import { markupPopBooks } from '../components/home/markup-pop-books';
import { activationCurrentLink } from './activation-current-link';

export async function handleCategoryClick(e) {
  const targetBtn = e.target.closest('.book__btn');

  if (targetBtn) {
    const categoryName = targetBtn.dataset.category;
    try {
      activationCurrentLink(categoryName);
      await markupPopBooks(categoryName);
    } catch (error) {
      console.error('Ошибка при загрузке категории:', error);
    }
    return;
  }

  const bookCard = e.target.closest('book-card');

  if (bookCard) {
    const bookId = bookCard.dataset.bookId;
    if (bookId) {
      await openBookModal(bookId);
    }
  }
}
