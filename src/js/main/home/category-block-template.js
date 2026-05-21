export const categoryBlockTemplate = (list_name, booksMarkup) => {
  return `<li class="top-books__category">
      <h3 class="top-books__title">${list_name}</h3>
      <ul class="top-books__list">
        ${booksMarkup}
      </ul>
      <button type="button" class="book__btn" data-category="${list_name}">
       <span class="button-text">see more</span> 
      </button>
    </li>`;
};
