import { handleCategory } from './handle-category';
import { markupCharitableFundations } from '../charitable-foundations';
import { markupListCategoryBooks } from '../all-categories-books';
import { markupPopBooks } from '../markup-pop-books';

const categoriesList = document.querySelector('.categories__list');

if (categoriesList) {
  categoriesList.addEventListener('click', handleCategory);
}

export async function homePage() {
  await Promise.all([
    markupListCategoryBooks(),
    markupCharitableFundations(),
    markupPopBooks('All Categories'),
  ]);
}

// export function initBackToTop() {
//   const backToTopBtn = document.getElementById('backToTopBtn');
//   if (!backToTopBtn) return;

//   // 1. Отслеживаем скролл страницы для показа/скрытия кнопки
//   window.addEventListener('scroll', () => {
//     // Если страница прокручена более чем на 400px, добавляем класс видимости
//     if (window.scrollY > 400) {
//       backToTopBtn.classList.add('is-visible');
//     } else {
//       backToTopBtn.classList.remove('is-visible');
//     }
//   });

//   // 2. Обрабатываем плавный скролл наверх при клике
//   backToTopBtn.addEventListener('click', () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth', // Плавная анимация прокрутки
//     });
//   });
// }

// // Запуск функции
// initBackToTop();

// Если вы хотите, чтобы кнопка позиционировалась строго поверх конкретного
// блока(например, карточки фондов), а не была зафиксирована на одном месте
// экрана при скролле, дайте знать — мы перепишем её на
// position: absolute.
